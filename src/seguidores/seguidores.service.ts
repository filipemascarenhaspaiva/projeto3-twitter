import { Injectable } from '@nestjs/common';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';
import { Seguidores } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const lista = [];

@Injectable()
export class seguidoressService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  create(createseguidoresDto: CreateSeguidoreDto) {
    lista.push(createseguidoresDto);
    return `Add com sucesso seguidores: ${createseguidoresDto.nome}`;
  }

  async createPrisma(
    createseguidoreDto: CreateSeguidoreDto,
  ): Promise<Seguidores> {
    return await this.prisma.seguidores.create({
      data: { ...createseguidoreDto },
    });
  }

  findAll() {
    return lista;
  }

  async findAllPrisma(): Promise<Seguidores[]> {
    return await this.prisma.seguidores.findMany();
  }

  findOne(id: number) {
    return lista[id];
  }

  async findOnePrisma(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.findUnique({ where: { id } });
  }

  update(id: number) {
    return `This action updates a #${id} seguidores`;
  }

  async updatePrisma(
    id: number,
    updateseguidoresDto: UpdateSeguidoreDto,
  ): Promise<Seguidores> {
    return await this.prisma.seguidores.update({
      data: { ...updateseguidoresDto },
      where: { id },
    });
  }

  remove(id: number) {
    delete lista[id];
    return `deletado com sucesso id: ${id}`;
  }

  async removePrisma(id: number) {
    return await this.prisma.seguidores.delete({ where: { id } });
  }
}
