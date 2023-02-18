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
import { ProjectInterface } from 'src/database/interfaces/project.interface';
import { ProjectsService } from '../services/projects.service';
@UseGuards(JwtAuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(
    private projectsService: ProjectsService,
  ) {}

  @Post('newProject')
  async newProject(@Body() newProject: ProjectInterface) {
    return this.projectsService.createProject(newProject);
  }


}
