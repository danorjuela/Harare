import { Module } from '@nestjs/common';
import { AppController } from '../controllers/Ticket.controller';
import { AppService } from '../services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { ConfigModule } from '@nestjs/config';

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
      entities: ['dist/**/entities/**/*{.ts,.js}'],
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: false,
      logging: [],
      extra: {
        max: 20,
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
