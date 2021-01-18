import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TicketService } from '../services/ticket.service';
import { TicketDto } from '../models/dto/ticket.dto';
import { TicketIdDto } from '../models/dto/ticketId.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  @HttpCode(201)
  createTicket(@Body() ticket: TicketDto): Promise<TicketIdDto> {
    if (this.ticketService.ValidateDates(ticket)) {
      return this.ticketService.createTicket(ticket);
    } else {
      throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'the date has passed',
        },
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get(':id')
  getTicket(@Param('id') id: number) {
    return this.ticketService.getTicketById(id);
  }
}
