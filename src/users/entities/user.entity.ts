import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: '42',
    description: 'id',
  })
  id: number;

  @Column()
  @ApiProperty({
    example: 'john',
    description: 'login',
  })
  login: string;

  @Column()
  password: string;
}
