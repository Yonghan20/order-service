import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { OrderController } from './orders.controller';
import { OrderService } from './orders.service';

@Module({
    imports: [CacheModule.register({
        ttl: 300 // 5 minutes
    })],
    controllers: [OrderController],
    providers: [OrderService, {
        provide: APP_INTERCEPTOR,
        useClass: CacheInterceptor
    }],
})
export class OrdersModule { }