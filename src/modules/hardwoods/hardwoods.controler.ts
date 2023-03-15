import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HardwoodInterface } from 'src/database/interfaces/hardwood.interface';
import { HardwoodsService } from './hardwoods.service';

@Controller('hardwoods')
export class HardwoodsController {
  constructor(private hardwoodsService: HardwoodsService) {}

  @Get()
  async getHardwoods(@Request() req) {
    return this.hardwoodsService.getAllHardwoods();
  }


}
