import { NestFactory } from '@nestjs/core';
import { TicketModule } from './module/ticket.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(TicketModule);
  const config = new DocumentBuilder()
    .setTitle('Harare Docs')
    .setDescription('Programa para prueba')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
