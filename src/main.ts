import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.use(cors({
    origin: 'https://woodproman.com'
  }));

  await app.listen(port);
}
bootstrap();
