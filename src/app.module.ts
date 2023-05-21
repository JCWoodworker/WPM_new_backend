import { Module } from '@nestjs/common';
import { NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { ProjectsModule } from './modules/projects/projects.module';
import { ProjectsController } from './modules/projects/projects.controler'
import { HardwoodsModule } from './modules/hardwoods/hardwoods.module';
import { HardwoodsController } from './modules/hardwoods/hardwoods.controler';

import { CorsMiddleware } from './middleware/cors.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    ProjectsModule,
    HardwoodsModule,
  ],
  controllers: [AppController, UsersController, ProjectsController, HardwoodsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: any) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
