import { Test, TestingModule } from '@nestjs/testing';
import { seguindosService } from './seguindo.service';

describe('SeguindoService', () => {
  let service: seguindosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [seguindosService],
    }).compile();

    service = module.get<seguindosService>(seguindosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
