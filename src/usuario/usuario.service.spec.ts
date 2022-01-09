import { Test, TestingModule } from '@nestjs/testing';
import { usuariosService } from './usuario.service';

describe('UsuarioService', () => {
  let service: usuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [usuariosService],
    }).compile();

    service = module.get<usuariosService>(usuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
