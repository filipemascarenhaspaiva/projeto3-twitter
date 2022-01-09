import { Module } from '@nestjs/common';
import { categoriasService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriaController],
  providers: [categoriasService],
})
export class CategoriaModule {}
