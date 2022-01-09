/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
  
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsString()
    imagem: string;

    @IsString()
    bio: string;

    @IsNotEmpty()
    @IsString()
    nascimento: string;

    @IsNotEmpty()
    @IsInt()
    seguidores: number;

    @IsNotEmpty()
    @IsInt()
    seguindo: number;

    @IsNotEmpty()
    @IsString()
    criado_em: string;
    
    @IsString()
    modificado_em: number;

    @IsNotEmpty()
    @IsString()
    tweet: number;
}
