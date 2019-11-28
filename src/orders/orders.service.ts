import { Injectable } from '@nestjs/common';
import { Order, OrderResponse } from './orders.model'

@Injectable()
export class OrderService {
    private orders: Order[] = [];

    createOrder(): OrderResponse {
        const id = this.orders.length + 1
        const orderParam: Order = {
            id,
            name: `Package ${id}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'pending'
        }

        this.orders.push(orderParam)
        return {
            id,
            message: `Order ${id} created.`
        };
    }

    cancelOrder(id: number): string {
        const index = this.orders.findIndex((order => order.id == id))

        if (index < 0) {
            return 'Order not found'
        }

        this.orders[index].status = 'cancelled'
        return `Order ${id} cancelled`;
    }

    getOrderStatus(id: number): Order | string {
        const orderDetails = this.orders.find(order => order.id == id)
        return orderDetails || 'Order not found';
    }

    getOrders(): Order[] {
        return this.orders
    }
}
