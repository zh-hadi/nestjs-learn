import { Body, Controller, Post, Get, Param, Put, Patch, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Post()
    async addStudent(@Body() data: Partial<Student>){
        return this.studentService.create(data);
    }

    @Get()
    async findAll(){
        return this.studentService.getAll();
    } 

    @Get(":id")
    async findOne(@Param('id') id: string){
        return this.studentService.findOne(id);
    }

    @Put(":id")
    async update(
        @Param('id') id: string,
        @Body() data: Partial<Student>
    ){
        return this.studentService.update(id, data);
    }

    @Patch(":id")
    async patch(
        @Param('id') id: string,
        @Body() data: Partial<Student>
    ){
        return this.studentService.patch(id, data);
    }

    @Delete(":id")
    async remove(@Param('id') id: string)
    {
        return this.studentService.remove(id);
    }
}
