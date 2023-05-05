import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { ProjectInterface } from 'src/database/interfaces/project.interface';
import { ProjectEntity } from 'src/database/entities/Project.entity';
export type Project = any;

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  async createProject(project: ProjectInterface): Promise<Project> {
    return await this.projectRepository.save(project);
  }

  async findUserProjects(userId: string): Promise<Project[]> {
    return await this.projectRepository.find({ where: { userId: userId }});
  }
}
