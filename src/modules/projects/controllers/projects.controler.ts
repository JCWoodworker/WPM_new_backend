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
import { ProjectInterface } from 'src/database/interfaces/project.interface';
import { ProjectsService } from '../services/projects.service';
@Controller('projects')
export class ProjectsController {
  constructor(
    private projectsService: ProjectsService,
    ) {}
    
  @UseGuards(JwtAuthGuard)
  @Post('newProject')
  async newProject(@Body() newProject: ProjectInterface) {
    return this.projectsService.createProject(newProject);
  }


}
