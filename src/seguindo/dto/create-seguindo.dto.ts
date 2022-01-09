/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty} from 'class-validator';

export class CreateSeguindoDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
  
    @IsNotEmpty()
    @IsInt()
    idSeguindo: number;
  nome: any;
}

