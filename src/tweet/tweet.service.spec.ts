import { Test, TestingModule } from '@nestjs/testing';
import { tweetsService } from './tweet.service';

describe('TweetService', () => {
  let service: tweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [tweetsService],
    }).compile();

    service = module.get<tweetsService>(tweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
