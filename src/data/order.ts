// to skip the process of setting up database
// this file serves as data from database
import { Order } from '../orders/orders.model'

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
export let OrderData: Order[] = [{
    id: 1,
    name: 'First Order',
    description,
    status: 'confirmed',
    card: {
        name: 'New Customer',
        number: '4242 4242 4242 4242',
        cvc: 500,
        expiry: '08/11'
    }
}, {
    id: 2,
    name: 'Second Order',
    description,
    status: 'confirmed',
    card: {
        name: 'New Customer',
        number: '4242 4242 4242 4242',
        cvc: 500,
        expiry: '08/11'
    }
}, {
    id: 3,
    name: 'Third Order',
    description,
    status: 'cancelled',
    card: {
        name: 'New Customer',
        number: '4242 4242 4242 4242',
        cvc: 500,
        expiry: '08/11'
    }
}, {
    id: 4,
    name: 'Fourth Order',
    description,
    status: 'cancelled',
    card: {
        name: 'New Customer',
        number: '4242 4242 4242 4242',
        cvc: 500,
        expiry: '08/11'
    }
}, {
    id: 5,
    name: 'Fifth Order',
    description,
    status: 'delivered',
    card: {
        name: 'New Customer',
        number: '4242 4242 4242 4242',
        cvc: 500,
        expiry: '08/11'
    }
}, {
    id: 6,
    name: 'Sixth Order',
    description,
    status: 'delivered',
    card: {
        name: 'New Customer',
        number: '4242 4242 4242 4242',
        cvc: 500,
        expiry: '08/11'
    }
}, {
    id: 7,
    name: 'Seventh Order',
    description,
    status: 'delivered',
    card: {
        name: 'New Customer',
        number: '4242 4242 4242 4242',
        cvc: 500,
        expiry: '08/11'
    }
}, {
    id: 8,
    name: 'Eighth Order',
    description,
    status: 'confirmed',
    card: {
        name: 'New Customer',
        number: '4242 4242 4242 4242',
        cvc: 500,
        expiry: '08/11'
    }
}, {
    id: 9,
    name: 'Ninth Order',
    description,
    status: 'delivered',
    card: {
        name: 'New Customer',
        number: '4242 4242 4242 4242',
        cvc: 500,
        expiry: '08/11'
    }
}, {
    id: 10,
    name: 'Tenth Order',
    description,
    status: 'cancelled',
    card: {
        name: 'New Customer',
        number: '4242 4242 4242 4242',
        cvc: 500,
        expiry: '08/11'
    }
}]
