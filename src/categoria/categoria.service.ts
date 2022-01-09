import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const lista = [];

@Injectable()
export class categoriasService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  create(createcategoriaDto: CreateCategoriaDto) {
    lista.push(createcategoriaDto);
    return `Add com sucesso categoria: ${createcategoriaDto.nome}`;
  }

  async createPrisma(createcategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    return await this.prisma.categoria.create({
      data: { ...createcategoriaDto },
    });
  }

  findAll() {
    return lista;
  }

  async findAllPrisma(): Promise<Categoria[]> {
    return await this.prisma.categoria.findMany();
  }

  findOne(id: number) {
    return lista[id];
  }

  async findOnePrisma(id: number): Promise<Categoria> {
    return await this.prisma.categoria.findUnique({ where: { id } });
  }

  update(id: number) {
    return `This action updates a #${id} categoria`;
  }

  async updatePrisma(
    id: number,
    updatecategoriaDto: UpdateCategoriaDto,
  ): Promise<Categoria> {
    return await this.prisma.categoria.update({
      data: { ...updatecategoriaDto },
      where: { id },
    });
  }

  remove(id: number) {
    delete lista[id];
    return `deletado com sucesso id: ${id}`;
  }

  async removePrisma(id: number) {
    return await this.prisma.categoria.delete({ where: { id } });
  }
}
