import { IsString, ValidateNested} from "class-validator";
import { Type } from "class-transformer";

import { AddressDto } from "./address.dto";

export class CreateCustomerDto {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @ValidateNested()
    @Type(() => AddressDto)
    address: AddressDto
}
