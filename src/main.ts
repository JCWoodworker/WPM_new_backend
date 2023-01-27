import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'tsconfig-paths/register'

const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  // app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
