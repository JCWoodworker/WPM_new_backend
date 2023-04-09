import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HardwoodsService } from './hardwoods.service';
import { HardwoodEntity } from '../../database/entities/Hardwood.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([HardwoodEntity])
  ],
  providers: [HardwoodsService],
  exports: [HardwoodsService]
})

export class HardwoodsModule {}
