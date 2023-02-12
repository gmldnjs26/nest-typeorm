import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  UseInterceptors,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JoginRequestDto } from './dto/join.request.dto';

import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';
import { UsersService } from './users.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}
  @ApiOperation({ summary: '내 정보 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }
  @Post()
  async postUsers(@Body() data: JoginRequestDto) {
    const result = await this.userService.join(
      data.email,
      data.nickname,
      data.password,
    );
    if (result) {
      return 'ok';
    } else {
      throw new ForbiddenException();
    }
  }

  @ApiOperation({ summary: '로그인' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  logIn(@User() user) {
    return this.authService.login(user);
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req) {
    return req.user;
  }
}
