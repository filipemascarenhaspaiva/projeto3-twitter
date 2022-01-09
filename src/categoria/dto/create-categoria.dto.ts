/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty} from 'class-validator';

export class CreateCategoriaDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
  
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    criado_em: string;
    
}

