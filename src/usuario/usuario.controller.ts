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
import { usuariosService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  usuarioService: any;
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly UsuarioService: usuariosService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.createPrisma(CreateUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.usuarioService.updatePrisma(+id, UpdateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.removePrisma(+id);
  }
}
