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
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';

@Controller('seguidores')
export class SeguidoresController {
  seguidoresService: any;
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly SeguidoresService: SeguidoresService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() createSeguidoresDto: CreateSeguidoreDto) {
    return this.seguidoresService.createPrisma(CreateSeguidoreDto);
  }

  @Get()
  findAll() {
    return this.seguidoresService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.seguidoresService.updatePrisma(+id, UpdateSeguidoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguidoresService.removePrisma(+id);
  }
}
