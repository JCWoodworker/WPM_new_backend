import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from 'src/auth/services/auth.service';
import { UsersService } from '../services/users.service';
import { UserInterface } from '../../typeorm/interfaces/user.interface';

@Controller()
export class UsersController {
  constructor(
    private usersService: UsersService,
    private readonly authService: AuthService 
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return this.authService.getUserInfo(req.user.username);
  }

  @Post('register')
  async registerUser(@Body() newUser: UserInterface) {
    return this.usersService.register(newUser);
  }

  @Get('testEncryption/:password')
  async testEncryption(@Param ('password') password: string) {
    return this.usersService.encryptPassword(password);
  }

  @Get('testDecryption/')
  async testDecryption(@Body() body: any) {
    debugger
    return this.usersService.decryptPassword(body.password, body.hash);
  }
}
