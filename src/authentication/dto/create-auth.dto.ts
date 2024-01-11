import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
