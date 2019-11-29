import { Module } from '@nestjs/common';
import { PaymentController } from './payments.controller';

@Module({
    imports: [],
    controllers: [PaymentController],
    providers: [],
})
export class PaymentModule { }