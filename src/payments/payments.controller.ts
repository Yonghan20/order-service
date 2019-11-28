import { Controller } from '@nestjs/common';
import { PaymentService } from './payments.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }

    @MessagePattern({ cmd: 'PAYMENT_POST' })
    payment(orderId: number): string {
        return `Payment for ${orderId} is successfully paid.`
    }
}