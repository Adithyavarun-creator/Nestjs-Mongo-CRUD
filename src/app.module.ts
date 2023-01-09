import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student, StudentSchema } from './student.schema';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { StudentController } from './student/student.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Adithyavarun:adithyavarun123@cluster0.a17ti8i.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
