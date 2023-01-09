import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';

@Module({
  controllers: [StudentController],
  exports: [StudentController],
})
export class StudentModule {}
