import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';

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
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async registerUser(@Body() newUser: UserInterface) {
    return this.usersService.register(newUser);
  }

}
