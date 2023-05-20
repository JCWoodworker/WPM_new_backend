import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/services/auth.service';
import { UserInterface } from '../../database/interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private readonly authService: AuthService 
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async registerUser(@Body() newUser: UserInterface, @Req() req: Request) {
    const userIp = req.ip
    return this.usersService.register(newUser, userIp);
  }

}
