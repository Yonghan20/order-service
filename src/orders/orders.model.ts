type Status = 'created' | 'confirmed' | 'cancelled' | 'delivered'

export interface Card {
    name: string
    number: string
    cvc: number
    expiry: string
}

export interface OrderPayload {
    orderName: string
    card: Card
}

export class Order {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public status: Status,
        public card: Card
    ) { }
}

export interface OrderResponse {
    id: number,
    message: string
}

export interface PaymentServiceResponse {
    status: number
    message: string
}