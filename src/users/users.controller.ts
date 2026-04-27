import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

class CreateUserDto {
    name: string;
    email: string;
    age: Number;
}

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    getAllUsers(){
        return this.usersService.getAll()
    }

    @Post()
    @HttpCode(404)
    create(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return "create new users";
    }

    @Get("query")
    getQuery(@Query('name') name: string) {
        return name;
    }

    @Get(":id")
    findUser(@Param('id') id: string){
        return this.usersService.findById(Number(id))
    }
}
