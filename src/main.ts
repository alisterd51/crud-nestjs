import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CRUD NestJS for OpenFoodFact')
    .setDescription('The CRUD NestJS for OpenFoodFact API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('auth')
    .addTag('open-food-facts')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
