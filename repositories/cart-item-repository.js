const uuid = require('uuid');

let cartItems = [
	{
		'cart_item_id': uuid.v4(),
		'cart_id': '03815666-3822-4faf-a580-d3632f7e454b',
		'item_id': 'dc288183-22f9-4524-8b39-ab8314aec615',
		'quantity': 2
	},
	{
		'cart_item_id': uuid.v4(),
		'cart_id': '03815666-3822-4faf-a580-d3632f7e454b',
		'item_id': '474d4f7f-8398-4a41-9e07-047dc8007662',
		'quantity': 5
	}
];

const selectCartItems = () => ({
	rows: cartItems,
	error: new Error(),
	driver: 'postgres'
});

const selectCartItemByCartItemId = (cartItemId) =>
	cartItems.find((cartItem) => cartItem['cart_item_id'] === cartItemId);

const selectCartItemsByCartId = (cartId) => ({
	rows: cartItems.filter((cartItem) => cartItem['cart_id'] === cartId)
});

module.exports = {
	selectCartItems,
	selectCartItemsByCartItemId,
	selectCartItemsByCartId
};