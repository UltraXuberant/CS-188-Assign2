const {
	selectCartItems,
	selectCartItemByCartItemId,
	selectCartItemsByCartId
} = require('../repositories/cart-item-repository');

const mapToModel = (cartItem) => ({
	cartItemId: cartItem['cart_item_id'],
	cartId: cartItem['cart_id'],
	itemId: cartItem['item_id'],
	quantity: cartItem['quantity']
});

const getAllCartItems = () => {
	const {rows} = selectCartItems();

	return rows.map(mapToModel);
};

const getCartItemByCartItemId = (cartItemId) => {
	const cartItem = selectCartItemByCartItemId(itemId);

	return mapToModel(cartItem);
};

const getCartItemsByCartId = (cartId) => {
	const {rows} = selectCartItemsByCartId(cartId);

	return rows.map(mapToModel);
}

module.exports = {
	getAllCartItems,
	getCartItemByCartItemId,
	getCartItemsByCartId
};