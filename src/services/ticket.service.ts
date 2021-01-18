import { Injectable } from '@nestjs/common';
import { TicketEntity } from '../models/database/ticket.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketDto } from '../models/dto/ticket.dto';
import { TicketIdDto } from '../models/dto/ticketId.dto';

import * as moment from 'moment';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(TicketEntity)
    private readonly repo: Repository<TicketEntity>,
  ) {}

  public async createTicket(ticket: TicketDto): Promise<TicketIdDto> {
    const newTicket = new TicketEntity();
    newTicket.DepartureDate = ticket.DepartureDate;
    newTicket.DepartureHour = moment(ticket.DepartureDate).format('hh:mm:ssZ');
    newTicket.DepartureCity = ticket.DepartureCity;
    newTicket.ArrivalDate = ticket.ArrivalDate;
    newTicket.ArrivalHour = moment(ticket.ArrivalDate).format('hh:mm:ssZ');
    newTicket.ArrivalCity = ticket.ArrivalCity;
    newTicket.HaveHoldLuggage = ticket.HaveHoldLuggage;
    newTicket.PassagerName = ticket.PassagerName;
    newTicket.Price = ticket.Price;
    await newTicket.save();
    const ticketId = new TicketIdDto();
    ticketId.itineraryID = newTicket.Id;
    return ticketId;
  }

  public async getTicketById(id: number): Promise<TicketEntity> {
    return await this.repo.findOne({ Id: id });
  }

  public ValidateDates(ticket: TicketDto): boolean {
    const date: Date = new Date(Date.now());
    date.setHours(date.getHours() + 6);
    let flag = true;

    if (date > ticket.DepartureDate){
      flag = false;
    }

    if (date > ticket.ArrivalDate){
      flag = false;
    }

    if (ticket.ArrivalDate > ticket.DepartureDate) {
      flag = false;
    }

    return flag;
  }
}
