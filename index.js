const item1 = {
    itemId: '02bbdbc7-e22e-4153-abd8-b5732a4ba6b5',
    name: 'Ball cap',
    description: "It's a hat",
    price: 19.99,
};

const item2 = {
    itemId: '09a5044a-1225-4351-84f0-3d1d0e45e894',
    name: 'Hoodie',
    description: "Drake Merch",
    price: 39.99,
};

const item3 = {
    itemId: '41be9c0e-b794-40ce-bf80-e97bf9934b87',
    name: 'Pen',
    description: "Drake Merch",
    price: 2.99,
};

const cart = {
	customerId: '43161ce7-eba0-4a36-90b3-dd757ff2c407',
	creationDate: '1/2/2020',
	purchaseDate: '2/9/2020',
	items: [item1, item2, item3],
}

const firstName = 'Bryce';
const lastName = 'Valley';

const customer = {
	customerId: '43161ce7-eba0-4a36-90b3-dd757ff2c407',
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
    phoneNumber: '+12345678910'
};

console.log('item1', item1);
console.log('item2', item2);
console.log('item3', item3);
console.log('cart', cart)
console.log('customer', customer);