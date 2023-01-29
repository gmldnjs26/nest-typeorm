import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Channels')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannelds() {}

  @Post()
  createChannels() {}

  @Get('name')
  getSpecificChannels() {}

  @Get(':name/chats')
  getChats(@Query() query, @Param() param) {}

  @Post(':name/chats')
  postChat(@Body() body) {}

  @Post(':name/chats')
  getAllMembers() {}

  @Post(':name/chats')
  inviteMembers() {}
}
