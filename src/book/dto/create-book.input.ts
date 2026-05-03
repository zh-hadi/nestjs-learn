import { InputType, Field } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class CreateBookInput {

    @Field()
    @IsString()
    title: string;

    @Field()
    @IsString()
    author: string;
}