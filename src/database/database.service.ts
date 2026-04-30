import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {

    private dbContect = false;

    onModuleInit() {
        this.dbContect = true;
        console.log("App started");
    }

    onApplicationShutdown(signal: string) {
        this.dbContect = false;
        console.log("App shutdown:", signal);
    }

    getStatus(){
        return this.dbContect ? 'Conected DB': 'Not Connected DB';
    }
}