import { Prop, Schema } from "@nestjs/mongoose";

export class Address {
    @Prop()
    city: string;

    @Prop()
    street: string;
}