import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { tweetsService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Controller('tweet')
export class TweetController {
  tweetService: any;
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly TweetService: tweetsService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetService.createPrisma(CreateTweetDto);
  }

  @Get()
  findAll() {
    return this.tweetService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.tweetService.updatePrisma(+id, UpdateTweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetService.removePrisma(+id);
  }
}
