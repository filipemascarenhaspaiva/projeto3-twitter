/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString} from 'class-validator';

export class CreateTweetDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
  
    @IsInt()
    texto: string;

    @IsString()
    emoji: string;

    @IsString()
    data_postagem: string;

    @IsString()
    curtidas: number;
  nome: any;
}

