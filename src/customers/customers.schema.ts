import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Address } from "./address.schema";

export type CustomersDocument = Customer & Document;


@Schema()
export class Customer extends Document {
    @Prop()
    name: string

    @Prop()
    email: string

    @Prop({type: Address})
    address: Address 
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);