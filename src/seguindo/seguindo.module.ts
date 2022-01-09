import { Module } from '@nestjs/common';
import { seguindosService } from './seguindo.service';
import { SeguindoController } from './seguindo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SeguindoController],
  providers: [seguindosService],
})
export class SeguindoModule {}
