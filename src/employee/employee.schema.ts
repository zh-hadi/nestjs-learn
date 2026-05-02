import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Address, AddressSchema} from "./address.schema";

@Schema({timestamps: true})
export class Employee extends Document {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop({"type": [AddressSchema]})
    address: Address[]
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);