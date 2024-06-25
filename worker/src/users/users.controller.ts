import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { User } from './model/users.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUsers(@Body() createUsers: CreateUsersDto[]) {
    const createdUsers = await this.usersService.createUser(createUsers);
    return {
      message: 'Users received and saved successfully',
      count: createdUsers.length,
    };
  }
}
