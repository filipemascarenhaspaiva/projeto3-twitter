/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty} from 'class-validator';

export class CreateSeguidoreDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
  
    @IsNotEmpty()
    @IsInt()
    idSeguidor: number;
  nome: any;
}

