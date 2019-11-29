import { Controller } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { PaymentPayload, PaymentResponse } from './payments.model'

@Controller()
export class PaymentController {

    @MessagePattern({ cmd: 'PAYMENT_POST' })
    payment(payload: PaymentPayload): RpcException | PaymentResponse {
        const { number } = payload.card
        if (number == '4000 0000 0000 0000') {
            throw new RpcException('Card validation failed.');
        }

        return {
            status: 200,
            message: `Payment for Order ${payload.orderId} is successfully paid.`
        }

    }
}