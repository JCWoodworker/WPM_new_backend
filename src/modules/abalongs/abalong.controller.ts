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
import { AbalongInterface } from 'src/database/interfaces/abalong.interface';
import { AbalongsService } from './abalong.service';

@Controller('abalong')
export class AbalongController {
	constructor(private abalongsService: AbalongsService) {}

}