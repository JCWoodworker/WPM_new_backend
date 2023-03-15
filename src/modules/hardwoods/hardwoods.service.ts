import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { HardwoodEntity } from 'src/database/entities/hardwood.entity';
import { HardwoodInterface } from 'src/database/interfaces/hardwood.interface';
export type Hardwood = any;

@Injectable()
export class HardwoodsService {
  constructor(
    @InjectRepository(HardwoodEntity)
    private readonly hardwoodRepository: Repository<HardwoodEntity>,
  ) {}

//   async createHardwood(hardwood: HardwoodInterface): Promise<Hardwood> {
//     return await this.hardwoodRepository.save(hardwood);
//   }

  async getAllHardwoods(): Promise<Hardwood[]> {
    let hardwoodList: any[] = await this.hardwoodRepository.find()
    hardwoodList = hardwoodList.map((hardwood) => {
      return {
        id: hardwood.hardwoodId,
        name: hardwood.name,
        price: hardwood.price,
        priceType: hardwood.priceType,
        region: hardwood.region,
        jankaHardness: hardwood.jankaHardness,
        imageUrl: hardwood.imageUrl,
      };
    });
    return hardwoodList;
  }
}
