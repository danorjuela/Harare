import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('ticket')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createTicket(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getTicket( id: Number ): string {
    return this.appService.getHello();
  }
}
