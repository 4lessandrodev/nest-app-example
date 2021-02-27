import { IsISO8601, IsNotEmpty, IsNumber, Length } from 'class-validator';
export class LoginDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  @Length(1, 10)
  description: string;

  @IsISO8601()
  date: Date;
}
