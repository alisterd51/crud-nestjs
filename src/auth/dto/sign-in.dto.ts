import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'john',
    description: 'login',
  })
  readonly login: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'changeme',
    description: 'password',
  })
  readonly password: string;
}
