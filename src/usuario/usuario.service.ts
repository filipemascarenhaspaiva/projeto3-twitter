import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const lista = [];

@Injectable()
export class usuariosService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  create(createusuarioDto: CreateUsuarioDto) {
    lista.push(createusuarioDto);
    return `Add com sucesso usuario: ${createusuarioDto.nome}`;
  }

  async createPrisma(createusuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return await this.prisma.usuario.create({
      data: { ...createusuarioDto },
    });
  }

  findAll() {
    return lista;
  }

  async findAllPrisma(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  findOne(id: number) {
    return lista[id];
  }

  async findOnePrisma(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique({ where: { id } });
  }

  update(id: number) {
    return `This action updates a #${id} usuario`;
  }

  async updatePrisma(
    id: number,
    updateusuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    return await this.prisma.usuario.update({
      data: { ...updateusuarioDto },
      where: { id },
    });
  }

  remove(id: number) {
    delete lista[id];
    return `deletado com sucesso id: ${id}`;
  }

  async removePrisma(id: number) {
    return await this.prisma.usuario.delete({ where: { id } });
  }
}
