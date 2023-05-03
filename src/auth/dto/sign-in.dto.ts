import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly login: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly password: string;
}
