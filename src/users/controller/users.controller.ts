import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from '../dto/create-user.dto';
import { UsersService } from '../service/users.service';
@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  createUser(@Body() body: createUserDto) {
    const user = this.usersService.create(body.email, body.password);
    return user;
  }
}
