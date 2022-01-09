import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const lista = [];

@Injectable()
export class tweetsService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  create(createtweetDto: CreateTweetDto) {
    lista.push(createtweetDto);
    return `Add com sucesso tweet: ${createtweetDto.nome}`;
  }

  async createPrisma(createtweetDto: CreateTweetDto): Promise<Tweet> {
    return await this.prisma.tweet.create({
      data: { ...createtweetDto },
    });
  }

  findAll() {
    return lista;
  }

  async findAllPrisma(): Promise<Tweet[]> {
    return await this.prisma.tweet.findMany();
  }

  findOne(id: number) {
    return lista[id];
  }

  async findOnePrisma(id: number): Promise<Tweet> {
    return await this.prisma.tweet.findUnique({ where: { id } });
  }

  update(id: number) {
    return `This action updates a #${id} tweet`;
  }

  async updatePrisma(
    id: number,
    updatetweetDto: UpdateTweetDto,
  ): Promise<Tweet> {
    return await this.prisma.tweet.update({
      data: { ...updatetweetDto },
      where: { id },
    });
  }

  remove(id: number) {
    delete lista[id];
    return `deletado com sucesso id: ${id}`;
  }

  async removePrisma(id: number) {
    return await this.prisma.tweet.delete({ where: { id } });
  }
}
