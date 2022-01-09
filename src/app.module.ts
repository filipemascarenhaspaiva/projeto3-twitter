/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [UsuarioModule, PrismaModule, AuthModule, SeguidoresModule, SeguindoModule, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
