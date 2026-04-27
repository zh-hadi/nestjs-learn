import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';

class CreateUserDto {
    name: string;
    email: string;
    age: number;
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
        const user = this.usersService.createUser(createUserDto);
        return user;
    }

    @Put(":id")
    update(@Param('id') id: string, @Body()createUserDto: CreateUserDto){
        const user = this.usersService.updateUser(Number(id), createUserDto);
        return user;
    }

    @Patch(":id")
    patchUser(@Param('id') id: string, @Body() body: Partial<{name: string, email: string, age: number}>){
        const user = this.usersService.patchUser(Number(id), body);
        return user;
    }

    @Delete("/delete/:id")
    deleteUser(@Param('id')id: string){
        const user = this.usersService.deleteUser(Number(id));
        return user;
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
