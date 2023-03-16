import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbalongInterface } from 'src/database/interfaces/abalong.interface';
import { AbalongEntity } from 'src/database/entities/Abalong.entity';

@Injectable()
export class AbalongsService {
	constructor(
		@InjectRepository(AbalongEntity)
		private abalongRepository: Repository<AbalongEntity>,
	) {}

}