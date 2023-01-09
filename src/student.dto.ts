import {
  IsString,
  IsNumber,
  MaxLength,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  rollNumber: number;

  @IsNumber()
  @IsNotEmpty()
  class: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  gender: string;

  @IsNumber()
  @IsNotEmpty()
  marks: number;
}

export class UpdateStudentDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  rollNumber: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  class: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @IsOptional()
  gender: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  marks: number;
}
