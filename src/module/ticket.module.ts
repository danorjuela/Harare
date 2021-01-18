import { Module } from '@nestjs/common';
import { TicketController } from '../controllers/ticket.controller';
import { TicketService } from '../services/ticket.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TicketEntity } from '../models/database/ticket.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PWD,
      database: process.env.DATABASE_NAME,
      entities: ['dist/models/database/**/*{.ts,.js}'],
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: false,
      logging: [],
      extra: { max: 20 },
    }),
    TypeOrmModule.forFeature([TicketEntity]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
