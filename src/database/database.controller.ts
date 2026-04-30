import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
    constructor(private databaseServie: DatabaseService){}

    @Get("status")
    getStatus(){
        return this.databaseServie.getStatus();
    }
}
