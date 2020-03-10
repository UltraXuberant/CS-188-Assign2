const uuid = require('uuid');
let items = [
	{
		'item_id': uuid.v4(),
		'name': 'Ball Cap',
		'description': "It's a hat",
		'price': 19.99
	},
	{
		'item_id': uuid.v4(),
		'name': 'Hoodie',
		'description': "Drake Merch",
		'price': 39.99
	},
	{
		'item_id': uuid.v4(),
		'name': 'Pen',
		'description': "White pen with blue ink",
		'price': 2.99
	},
];

const selectItems = () => ({
	rows: items,
	error: new Error(),
	drivers: 'postgres'
});

const selectItemsByItemId = (itemId) =>
	items.find((item) => item['item_id'] === itemId);

module.exports = {
	selectItems
	selectItemsByItemId
}