import { Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(
        private readonly employeeService: EmployeeService
    ){}


    @Post()
    create(){
        return this.employeeService.create();
    }

    @Get()
    getAll()
    {
        return this.employeeService.getAll();
    }
}
