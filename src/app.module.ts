import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CustomerModule } from './customer/customer.module';
import { CustomersModule } from './customers/customers.module';
import { UserRoleController } from './user-role/user-role.controller';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { MiddlewareMiddleware } from './middleware/middleware.middleware';
import { EvService } from './ev/ev.service';
import { ConfigModule } from '@nestjs/config';
import { EvControllerController } from './ev-controller/ev-controller.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { EmployeeModule } from './employee/employee.module';
import { PipeController } from './pipe/pipe.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaModule } from './prisma/prisma.module';
import { BookModule } from './book/book.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      graphiql: true,
    }),
    UsersModule, 
    CustomerModule, 
    CustomersModule, 
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.SUPABASE_DB,
    
      ssl: {
        rejectUnauthorized: false,
      },
    
      autoLoadEntities: true,
      synchronize: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL_MONGO!), StudentModule, EmployeeModule, UserModule, PrismaModule, BookModule
  ],
  controllers: [AppController, UserRoleController, DatabaseController, EvControllerController, PipeController],
  providers: [AppService, DatabaseService, EvService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddlewareMiddleware).forRoutes('*');
  }
}
