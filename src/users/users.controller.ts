import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from '../auth/decorator/public.decorator';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: User,
  })
  @ApiForbiddenResponse()
  @ApiBody({
    type: CreateUserDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({
    description: 'get all users',
    type: [User],
  })
  findAll() {
    return this.usersService.findAll({ select: { id: true, login: true } });
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Get one user by id' })
  @ApiOkResponse({
    description: 'get one user',
    type: User,
  })
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.usersService.findOne({
      where: { id },
      select: { id: true, login: true },
    });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one user by id' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'update one user' })
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  @ApiBody({
    type: CreateUserDto,
  })
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one user by id' })
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'delete one user' })
  @ApiUnauthorizedResponse({
    description: 'Access token is missing or invalid',
  })
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.usersService.remove(id);
  }
}
