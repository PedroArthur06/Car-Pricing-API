import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { createUserDto } from '../dto/create-user.dto';
import { UsersService } from '../service/users.service';
import { updateUserDto } from '../dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
import { SerializeInterceptor } from '../../interceptors/serialize.interceptor';
import { userDto } from '../dto/user.dto';
@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  createUser(@Body() body: createUserDto) {
    const user = this.usersService.create(body.email, body.password);
    return user;
  }
  @UseInterceptors(new SerializeInterceptor(userDto))
  @Get('/:id')
  findUser(@Param('id') id: string) {
    console.log('Handler is running');
    return this.usersService.findOne(parseInt(id));
  }

  @Get()
  async findEmail(@Query('email') email: string) {
    const users = await this.usersService.find(email);
    if (!users || users.length === 0) {
      throw new NotFoundException('User not found');
    }
    return users;
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: updateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
