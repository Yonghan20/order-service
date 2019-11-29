import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { OrderService } from './orders.service';
import { Order, OrderPayload, PaymentServiceResponse } from './orders.model'
import { of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';

@Controller('order')
export class OrderController {
    private readonly client: ClientProxy;

    constructor(private readonly orderService: OrderService) {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP
        });
    }

    @Post()
    createOrder(@Body() payload: OrderPayload): any {
        const response = this.orderService.createOrder(payload);
        const orderId = response.id
        const cmd = { cmd: 'PAYMENT_POST' }
        const paymentPayload = { orderId, ...payload }
        return this.client.send<string[]>(cmd, paymentPayload).pipe(
            catchError(val => of({ error: val.message })),
            tap((successEvent: any) => {
                console.log(successEvent)
                if (successEvent.status == 200) {
                    delay(5000000)
                    const res = this.orderService.updateOrder(orderId)
                    console.log(res)
                }

            })
        )
    }

    @Put(':id')
    cancelOrder(@Param('id') id: number): any {
        return this.orderService.cancelOrder(id);
    }

    @Get(':id')
    getOrderStatus(@Param('id') id: number): Order | string {
        return this.orderService.getOrderStatus(id);
    }

    @Get()
    getOrders(): Order[] {
        return this.orderService.getOrders()
    }
}
