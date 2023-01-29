import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JoginRequestDto } from './dto/join.request.dto';

import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  @ApiOperation({ summary: '내 정보 가져오기' })
  @Get()
  getUsers(@User() user) {
    return user;
  }
  @Post()
  postUsers(@Body() data: JoginRequestDto) {
    return data;
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req) {
    return req.user;
  }
}
