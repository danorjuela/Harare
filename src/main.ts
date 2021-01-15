import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder().setTitle('Harare - AirMicroservice').setDescription('Proyecto de prueba netactica').build()
  );
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
