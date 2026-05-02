import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Post()
    async create(@Body()body: Partial<User>): Promise<User>
    {
        return this.userService.create(body);
    }

    @Get()
    async getAll():Promise<User[]>
    {
        return this.userService.findAll();
    }

    @Get(":id")
    async getOne(
        @Param('id') id: number,
    ){
        return this.userService.findOne(id);
    }

    @Put(":id")
    async update(
        @Param('id')id: number,
        @Body() body: Partial<User>
    ){
        return this.userService.update(id, body);
    }

    @Delete(":id")
    async delete(@Param("id")id: number) {
        return this.userService.remove(id);
    }
}
