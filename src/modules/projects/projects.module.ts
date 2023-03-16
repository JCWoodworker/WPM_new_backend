import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsService } from './projects.service';
import { ProjectEntity } from '../../database/entities/Project.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectEntity])
  ],
  providers: [ProjectsService],
  exports: [ProjectsService]
})

export class ProjectsModule {}