import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
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
    description: 'passowrd',
  })
  readonly password: string;
}
