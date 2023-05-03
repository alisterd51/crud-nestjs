import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({
    example: 'john',
    description: 'login',
  })
  login: string;

  @Column()
  @ApiProperty({
    example: 'changeme',
    description: 'password',
  })
  password: string;
}
