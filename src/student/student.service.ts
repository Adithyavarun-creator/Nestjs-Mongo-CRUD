import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto, UpdateStudentDto } from 'src/student.dto';
import { IStudent } from 'src/student.inteface';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<IStudent>,
  ) {}

  async createStudent(create: CreateStudentDto): Promise<IStudent> {
    const newStudent = await new this.studentModel(create);
    return newStudent.save();
  }

  //read all student
  async getAllStudents(): Promise<IStudent[]> {
    const studentData = await this.studentModel.find();
    if (!studentData || studentData.length === 0) {
      throw new NotFoundException('Student data not found');
    }
    return studentData;
  }

  //get single student by id
  async getStudent(id: string): Promise<IStudent> {
    const existingStudent = await this.studentModel.findById(id);
    if (!existingStudent) {
      throw new NotFoundException(`Student of ${id} was not found`);
    }
    return existingStudent;
  }

  //delete student by id
  async deleteStudent(id: string): Promise<IStudent> {
    const existingStudent = await this.studentModel.findByIdAndDelete(id);
    if (!existingStudent) {
      throw new NotFoundException(`Student of ${id} was not found`);
    }
    return existingStudent;
  }

  //update existing student by id
  async updateStudent(
    id: string,
    updateStudent: UpdateStudentDto,
  ): Promise<IStudent> {
    const existingStudent = await this.studentModel.findByIdAndUpdate(
      id,
      updateStudent,
      { new: true },
    );
    if (!existingStudent) {
      throw new NotFoundException(`Student of ${id} was not found`);
    }
    return existingStudent;
  }
}
