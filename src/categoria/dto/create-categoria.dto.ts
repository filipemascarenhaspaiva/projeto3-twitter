/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty} from 'class-validator';

export class CreateCategoriaDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
  
    @IsNotEmpty()
    @IsInt()
    idCategoria: number;
  nome: any;
}

