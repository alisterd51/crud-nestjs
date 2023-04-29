import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (await this.findOne({ where: { login: createUserDto.login } })) {
      throw new ForbiddenException();
    }
    const saltOrRounds = 10;
    const user = this.usersRepository.create({
      login: createUserDto.login,
      password: await bcrypt.hash(createUserDto.password, saltOrRounds)
    });
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(where: FindOneOptions<User>): Promise<User | null> {
    return this.usersRepository.findOne(where);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const saltOrRounds = 10;
    return this.usersRepository.update({
      id
    }, {
      login: updateUserDto.login,
      password: await bcrypt.hash(updateUserDto.login, saltOrRounds)
    }
    );
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}