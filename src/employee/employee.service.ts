import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './employee.schema';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<Employee>
    ){}

    async create(): Promise<Employee | null>{
        const employee =new this.employeeModel({
            name: "abcd a",
            age: 20,
            address: [
                { city: "dhaka",street: "53/2"},
                { city: "jessore",street: "Vekutia "}
            ]
        });

        return employee.save();
    }

    async getAll(): Promise<Employee[]>
    {
        return this.employeeModel.find().exec();
    }

}
