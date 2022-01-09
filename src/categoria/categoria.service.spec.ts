import { Test, TestingModule } from '@nestjs/testing';
import { categoriasService } from './categoria.service';

describe('CategoriaService', () => {
  let service: categoriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [categoriasService],
    }).compile();

    service = module.get<categoriasService>(categoriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
