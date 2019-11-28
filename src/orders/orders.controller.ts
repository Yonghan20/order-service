import { Controller, Get, Post, Put, Param } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { OrderService } from './orders.service';
import { Order } from './orders.model'

@Controller('order')
export class OrderController {
    private readonly client: ClientProxy;

    constructor(private readonly orderService: OrderService) {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP
        });
    }

    @Post()
    createOrder(): any {
        const response = this.orderService.createOrder();
        return this.client.send<string[]>({ cmd: 'PAYMENT_POST' }, [response.id]);
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
