import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Address extends Document {
    @Prop()
    city: string;

    @Prop()
    street: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address)
