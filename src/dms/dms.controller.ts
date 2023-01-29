import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('DMS')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query() query) {
    console.log(query);
  }

  @Post(':id/chats')
  postChat() {
    return;
  }
}
