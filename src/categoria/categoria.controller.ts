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
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  categoriaService: any;
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly CategoriaService: CategoriaService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.createPrisma(CreateCategoriaDto);
  }

  @Get()
  findAll() {
    return this.categoriaService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.categoriaService.updatePrisma(+id, UpdateCategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaService.removePrisma(+id);
  }
}
