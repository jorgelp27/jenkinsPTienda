import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateClienteDto {
    
    @IsString()
    @MaxLength(9)
    dni: string;

    @IsString()
    @MaxLength(50)
    nombre: string;

    @IsString()
    @MaxLength(30)
    ciudad: string;

    @IsNumber()
    telefono: number;
}
