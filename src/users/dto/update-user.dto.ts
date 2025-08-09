import { IsEmail, IsString, IsOptional } from 'class-validator';

export class updateUserDto {
  @IsString()
  @IsOptional()
  password: string;

  @IsEmail()
  @IsOptional()
  email: string;
}
