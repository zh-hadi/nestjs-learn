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

@Module({
  imports: [
    UsersModule, 
    CustomerModule, 
    CustomersModule, 
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    MongooseModule.forRoot(process.env.DATABASE_URL!), StudentModule, EmployeeModule
  ],
  controllers: [AppController, UserRoleController, DatabaseController, EvControllerController, PipeController],
  providers: [AppService, DatabaseService, EvService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddlewareMiddleware).forRoutes('*');
  }
}
