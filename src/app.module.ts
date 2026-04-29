import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CustomerModule } from './customer/customer.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [UsersModule, CustomerModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
