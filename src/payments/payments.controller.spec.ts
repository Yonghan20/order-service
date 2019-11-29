import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payments.controller';
import { RpcException } from '@nestjs/microservices';
describe('PaymentController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [PaymentController],
        }).compile();
    });

    describe('payment', () => {
        it('should return success message', () => {
            const payload = {
                orderId: 1,
                card: {
                    number: '4242 4242 4242 4242',
                    cvc: 123,
                    expiry: '08/11',
                    name: 'test'
                }
            }
            const paymentController = app.get<PaymentController>(PaymentController);
            expect(paymentController.payment(payload)).toEqual(
                { "message": "Payment for Order 1 is successfully paid.", "status": 200 }
            );
        });

        it('should return fail message', () => {
            const payload = {
                orderId: 1,
                card: {
                    number: '4000 0000 0000 0000',
                    cvc: 123,
                    expiry: '08/11',
                    name: 'test'
                }
            }
            const paymentController = app.get<PaymentController>(PaymentController);
            expect(paymentController.payment(payload)).toEqual(new RpcException('Card validation failed.'));
        });
    });
});
