export class Payment {
    constructor(
        public id: number,
        public orderId: number,
        public status: string,
    ) { }
}

export interface PaymentPayload {
    orderId: number
    card: {
        name: string
        number: string
        cvc: number
        expiry: string
    }
}

export interface PaymentResponse {
    status: number
    message: string
}
