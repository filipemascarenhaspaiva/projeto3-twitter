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
import { SeguindoService } from './seguindo.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';

@Controller('seguindo')
export class SeguindoController {
  seguindoService: any;
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly SeguindoService: SeguindoService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() createSeguindoDto: CreateSeguindoDto) {
    return this.seguindoService.createPrisma(CreateSeguindoDto);
  }

  @Get()
  findAll() {
    return this.seguindoService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguindoService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.seguindoService.updatePrisma(+id, UpdateSeguindoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguindoService.removePrisma(+id);
  }
}
