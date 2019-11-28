type Status = 'pending' | 'confirmed' | 'cancelled'

export class Order {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public status: Status,
    ) { }
}

export interface OrderResponse {
    id: number,
    message: string
}