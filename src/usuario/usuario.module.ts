import { Module } from '@nestjs/common';
import { usuariosService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsuarioController],
  providers: [usuariosService],
})
export class UsuarioModule {}
