import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateCategoriaDto {

    @IsString()
    @MaxLength(10)
    id: string;

    @IsString()
    @MaxLength(30)
    nombre: string;
}
