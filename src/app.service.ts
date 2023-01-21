import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    const envName = this.configService.get('NAME');
    console.log(envName);
    return 'Hello World!';
  }
}
