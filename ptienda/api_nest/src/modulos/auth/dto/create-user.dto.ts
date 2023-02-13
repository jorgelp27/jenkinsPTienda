import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    @MaxLength(9)
    idUser: string;
    
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsString()
    @MaxLength(30)
    facebook: string;

    @IsString()
    @MaxLength(30)
    github: string;

    @IsString()
    @MinLength(1)
    idCliente:string;
    
}
