const {
	getAllItems,
	getItemByItemId
} = require('../services/item-service');

const getItemsRoute = (server) => {
	server.route({
		path: '/carts',
		method: 'GET',
		handler: (request, h) => {
			return getAllCarts();
		}
	});
};

const getItemByItemIdRoute = server => {
	server.route({
		path: 'carts/{cartId}',
		method: 'GET',
		handler: (request, h) => {
			const item = getItemByItemId(request.params.itemId);

			if (!item) {
				return h.response().code(404);
			}

			return item;
		}
	});
};

const initItemControllers = (server) => {
	getItemsRoute(server);
	getItemByItemIdRoute(server);
};

module.exports = {
	initItemControllers
};