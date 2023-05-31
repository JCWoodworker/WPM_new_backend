import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,PUT,PATCH,POST,DELETE'
  }));
  await app.listen(port);
}
bootstrap();