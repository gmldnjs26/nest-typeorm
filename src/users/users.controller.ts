import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { JoginRequestDto } from './dto/join.request.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }
  @Post()
  postUsers(@Body() data: JoginRequestDto) {
    return data;
  }

  @Post('login')
  logIn(@Req() req) {
    return req.user;
  }
  @Post('logout')
  logOut(@Req() req) {
    return req.user;
  }
}
