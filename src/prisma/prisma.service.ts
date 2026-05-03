import "dotenv/config";
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from 'src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    constructor() {
        const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
        super({ adapter });
    }

    async onModuleInit() {
        try {
            await this.$queryRaw`SELECT 1`;
            Logger.log("database conection successfully");
        } catch (error) {
            Logger.log("database connection failed !", error);
            throw error;
        }
    }
}
