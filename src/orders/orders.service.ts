import { Injectable } from '@nestjs/common';
import { Order, OrderResponse, OrderPayload } from './orders.model'
import { OrderData } from '../data/order'

@Injectable()
export class OrderService {
    private orders: Order[] = OrderData;

    createOrder(paylaod: OrderPayload): OrderResponse {
        const id = this.orders.length + 1
        const { orderName, card } = paylaod

        this.orders.push({
            id,
            name: `${orderName} ${id}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'created',
            card
        })

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
        return `Order ${id} is cancelled`;
    }

    getOrderStatus(id: number): Order | string {
        const orderDetails = this.orders.find(order => order.id == id)
        return orderDetails || 'Order not found';
    }

    getOrders(): Order[] {
        return this.orders
    }

    updateOrder(id: number): string {
        const index = this.orders.findIndex((order => order.id == id))

        if (index < 0) {
            return 'Order not found'
        }

        this.orders[index].status = 'delivered'
        return `Order ${id} is delivered`;
    }
}
