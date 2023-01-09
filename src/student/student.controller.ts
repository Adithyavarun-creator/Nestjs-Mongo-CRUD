import {
  Controller,
  Post,
  Get,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from 'src/student.dto';
import { IStudent } from 'src/student.inteface';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() body: CreateStudentDto): Promise<IStudent> {
    return this.studentService.createStudent(body);
  }

  @Get()
  async getStudents(): Promise<IStudent[]> {
    return this.studentService.getAllStudents();
  }

  @Put('/:id')
  async updateStudent(
    @Param('id') id: string,
    @Body() body: UpdateStudentDto,
  ): Promise<IStudent> {
    return this.studentService.updateStudent(id, body);
  }

  @Delete('/:id')
  async deleteStudent(@Param('id') id: string): Promise<IStudent> {
    return this.studentService.deleteStudent(id);
  }

  @Get('/:id')
  async getOneStudent(@Param('id') id: string): Promise<IStudent> {
    return this.studentService.getStudent(id);
  }
}
