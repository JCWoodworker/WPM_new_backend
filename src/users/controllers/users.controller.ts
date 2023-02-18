import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';

import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from 'src/auth/services/auth.service';
import { UsersService } from '../services/users.service';
import { UserInterface } from '../../database/interfaces/user.interface';

@Controller('users')
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

  // This was just a sample route to test the JWT guard.  It is not needed for this project.
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req: any) {
  //   return this.authService.getUserInfo(req.user.username);
  // }

  @Post('register')
  async registerUser(@Body() newUser: UserInterface) {
    return this.usersService.register(newUser);
  }

}
