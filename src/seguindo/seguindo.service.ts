import { Injectable } from '@nestjs/common';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';
import { Seguindo } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const lista = [];

@Injectable()
export class seguindosService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  create(createseguindoDto: CreateSeguindoDto) {
    lista.push(createseguindoDto);
    return `Add com sucesso seguindo: ${createseguindoDto.nome}`;
  }

  async createPrisma(createseguindoDto: CreateSeguindoDto): Promise<Seguindo> {
    return await this.prisma.seguindo.create({
      data: { ...createseguindoDto },
    });
  }

  findAll() {
    return lista;
  }

  async findAllPrisma(): Promise<Seguindo[]> {
    return await this.prisma.seguindo.findMany();
  }

  findOne(id: number) {
    return lista[id];
  }

  async findOnePrisma(id: number): Promise<Seguindo> {
    return await this.prisma.seguindo.findUnique({ where: { id } });
  }

  update(id: number) {
    return `This action updates a #${id} seguindo`;
  }

  async updatePrisma(
    id: number,
    updateseguindoDto: UpdateSeguindoDto,
  ): Promise<Seguindo> {
    return await this.prisma.seguindo.update({
      data: { ...updateseguindoDto },
      where: { id },
    });
  }

  remove(id: number) {
    delete lista[id];
    return `deletado com sucesso id: ${id}`;
  }

  async removePrisma(id: number) {
    return await this.prisma.seguindo.delete({ where: { id } });
  }
}
