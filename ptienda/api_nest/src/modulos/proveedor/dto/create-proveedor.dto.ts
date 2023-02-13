import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateProveedorDto {

    @IsString()
    @MaxLength(9)
    id: string;
    
    @IsString()
    @MaxLength(9)
    dni: string;

    @IsString()
    @MaxLength(50)
    nombre: string;

    @IsEmail()
    @MaxLength(30)
    email: string;

    @IsNumber()
    telefono: number;
}
