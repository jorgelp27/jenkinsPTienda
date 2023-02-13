import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateCestaDto {


    @IsNumber()
    cantidad: number;

    @IsString()
    @MaxLength(30)
    fecha: string;

    @IsString()
    idProducto?: string;

    @IsString()
    idUser?: string;

}
