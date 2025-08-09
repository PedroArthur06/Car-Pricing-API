import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { createUserDto } from '../dto/create-user.dto';
import { UsersService } from '../service/users.service';
import { updateUserDto } from '../dto/update-user.dto';
@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  createUser(@Body() body: createUserDto) {
    const user = this.usersService.create(body.email, body.password);
    return user;
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  @Get()
  findEmail(@Query('email') email: string) {
    return this.usersService.find(email);
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
