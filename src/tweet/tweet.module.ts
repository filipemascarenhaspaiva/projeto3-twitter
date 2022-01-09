import { Module } from '@nestjs/common';
import { tweetsService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TweetController],
  providers: [tweetsService],
})
export class TweetModule {}
