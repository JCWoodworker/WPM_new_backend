import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'

const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.use(cors());
  await app.listen(port);
}
bootstrap();
