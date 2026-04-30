import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guard/auth/auth.guard';
// import { EvService } from './../ev/ev.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body('name', new UppercasePipe()) name: string) {
    // console.log(this.evService.getDbUrl());
    return `The name is: ${name}`;
  }
  // create(@Body() createCustomerDto: CreateCustomerDto) {
  //   return this.customersService.create(createCustomerDto);
  // }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
