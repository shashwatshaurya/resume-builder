import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from "@nestjs/common";
import { ResumeService } from "./resume.service";

@Controller("resumes")
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post()
  async createResume(@Body() resumeData: any) {
    return this.resumeService.createResume(resumeData);
  }

  @Get(":id")
  async getResume(@Param("id") id: string) {
    return this.resumeService.getResume(id);
  }

  @Put(":id")
  async updateResume(@Param("id") id: string, @Body() resumeData: any) {
    return this.resumeService.updateResume(id, resumeData);
  }

  @Delete(":id")
  async deleteResume(@Param("id") id: string) {
    return this.resumeService.deleteResume(id);
  }
}
