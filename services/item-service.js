const {
	selectItems,
	selectItemsByItemId
} = require('../respositories/item-repository');

const mapToModel = (item) => ({
	itemId: item['item_id'],
	name: item['name']
	description: item['description']
	price: item['price']
});

const getAllItems = () => {
	const {rows} = selectItems();

	return rows.map(mapToModel);
};

const getItemByItemId = (itemId) => {
	const item = selectItemByItemId(itemId);

	return mapToModel(customer);
};

module.exports = {
	getAllItems,
	getItemByItemId
};