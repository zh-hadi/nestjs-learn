import { IsString, IsNumber } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsNumber()
    age: number;
}