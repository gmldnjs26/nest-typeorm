import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}
  async join(email, nickname, password) {
    if (!email) {
      throw new HttpException('이메일이 없습니다.', 400);
    }
    if (!nickname) {
      throw new HttpException('닉네임이 없습니다.', 400);
    }
    if (!password) {
      throw new HttpException('비밀번호가 없습니다.', 400);
    }
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, 12);
    return await this.userRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
