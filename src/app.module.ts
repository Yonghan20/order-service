import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { PaymentModule } from './payments/payments.module'

@Module({
  imports: [OrdersModule, PaymentModule],
  controllers: [AppController], // request handler
  providers: [AppService],
})
export class AppModule { }
