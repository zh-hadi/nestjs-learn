import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomersDocument } from './customers.schema';
import { Model } from 'mongoose';

@Injectable()
export class CustomersService {


  constructor(
    @InjectModel(Customer.name) private customersModel: Model<CustomersDocument>
  ){};

  create(createCustomerDto: CreateCustomerDto) {
    const customer = new this.customersModel(createCustomerDto);
    return customer.save();
    return 'This action adds a new customer';
  }

  findAll() {
    return this.customersModel.find().exec();
    return `This action returns all customers`;
  }

  findOne(id: string) {
    return this.customersModel.findById(id).exec();
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
