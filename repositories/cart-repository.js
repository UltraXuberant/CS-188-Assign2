const uuid = require('uuid');

let carts = [
    {
        'cart_id': '03815666-3822-4faf-a580-d3632f7e454b',
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
        'created_date': new Date(),
        'purchased_date': new Date()
    },
    {
        'cart_id': uuid.v4(),
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
        'created_date': new Date(),
        'purchased_date': new Date()
    }
];

const selectCarts = () => ({
    rows: carts,
    error: new Error(),
    driver: 'postgres'
});

const selectCartByCartId = (cartId) =>
    carts.find((cart) => cart['cart_id'] === cartId);

const selectCartsByCustomerId = (customerId) => ({
    rows: carts.filter((cart) => cart['customer_id'] === customerId)
});

module.exports = {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId
};