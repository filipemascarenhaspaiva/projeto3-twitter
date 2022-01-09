import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaController } from './Categoria.controller';
import { CategoriasService } from './Categoria.service';

describe('CategoriaController', () => {
  let controller: CategoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaController],
      providers: [CategoriasService],
    }).compile();

    controller = module.get<CategoriaController>(CategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
