
export class Payment {
    constructor(
        public id: number,
        public orderId: number,
        public status: string,
    ) { }
}