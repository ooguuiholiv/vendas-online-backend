import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
