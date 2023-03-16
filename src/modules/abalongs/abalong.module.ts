import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbalongsService } from './abalong.service';
import { AbalongEntity } from '../../database/entities/Abalong.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([AbalongEntity])
	],
	providers: [AbalongsService],
	exports: [AbalongsService]
})
export class AbalongsModule {}