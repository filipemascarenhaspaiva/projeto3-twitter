import { Test, TestingModule } from '@nestjs/testing';
import { SeguindoController } from './seguindo.controller';
import { seguindosService } from './seguindo.service';

describe('SeguindoController', () => {
  let controller: SeguindoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeguindoController],
      providers: [seguindosService],
    }).compile();

    controller = module.get<SeguindoController>(SeguindoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
