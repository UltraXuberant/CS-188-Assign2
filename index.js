const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const samId = uuid.v4();
    const customerSam = {
        customerId: samId,
        firstName: 'Sam',
        lastName: 'Jorn',
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
        phoneNumber: '+11111111111'
    };

    const customerSamantha = {
        customerId: uuid.v4(),
        firstName: 'Samantha',
        lastName: 'Kiln',
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
        phoneNumber: '+10987654321'
    };

    const customerDundie = {
        customerId: uuid.v4(),
        firstName: 'Dundie',
        lastName: 'Krikey',
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
        phoneNumber: '+12345678910'
    };

    const itemCap = {
        itemId: uuid.v4(),
        name: 'Ball cap',
        description: "It's a hat",
        price: 19.99,
    };

    const itemHoodie = {
        itemId: uuid.v4(),
        name: 'Hoodie',
        description: "Drake Merch",
        price: 39.99,
    };

    const itemPen = {
        itemId: uuid.v4(),
        name: 'Pen',
        description: "Drake Merch",
        price: 2.99,
    };

    const cartSam = {
        customerId: customerSam.customerId,
        creationDate: '1/2/2020',
        purchaseDate: '2/9/2020',
        items: [[itemPen, 1], [itemHoodie, 2]]
    };

    let customers = [customerSam, customerSamantha, customerDundie];

    let items = [itemPen, itemHoodie, itemCap];

    server.route({
        method: 'GET',
        path: '/customers',
        handler: (request, h) => {
            return customers;
        }
    });

    server.route({
        method: 'GET',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find((cust) => cust.customerId === customerId);

            if (!customer) {
                return h.response().code(404);
            }

            return customer;
        }
    });

    server.route({
        method: 'POST',
        path: '/customers',
        handler: (request, h) => {
            const customer = request.payload;
            const existingCust = customers.find((cust) => cust.customerId === customer.customerId);

            if (existingCust) {
                return h.response(existingCust).code(303);
            } else {
                customers.push(customer);

                return h.response(customer).code(201);
            }

        }
    });

    server.route({
        method: 'DELETE',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find((cust) => cust.customerId === customerId);

            if (!customer) {
                return h.response().code(404);
            }

            let newcustomers = [];

            customers.forEach((cust) => {
                if (cust.customerId !== customerId) {
                    newcustomers.push(cust);
                }
            });

            customers = newcustomers;

            return '';
        }
    });

    server.route({
        method: 'PUT',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const updatedcustomer = request.payload;

            if (customerId === samId && updatedcustomer.age !== 20) {
                return h.response().code(422);
            }

            if (customerId !== updatedcustomer.customerId) {
                return h.response().code(409);
            }

            let newcustomers = [];

            customers.forEach((cust) => {
                if (cust.customerId === customerId) {
                    newcustomers.push(updatedcustomer);
                } else {
                    newcustomers.push(cust);
                }
            });

            customers = newcustomers;

            return '';
        }
    });

    server.route({
        method: 'GET',
        path: '/items',
        handler: (request, h) => {
            return items;
        }
    });

    server.route({
        method: 'GET',
        path: '/item/{itemId}',
        handler: (request, h) => {
            const {itemId} = request.params;
            const item = items.find((it) => it.itemId === itemId);

            if (!item) {
                return h.response().code(404);
            }

            return item;
        }
    });

    server.route({
        method: 'POST',
        path: '/customers',
        handler: (request, h) => {
            const item = request.payload;
            const existingIt = customers.find((it) => it.itemId === item.itemId);

            if (existingIt) {
                return h.response(existingIt).code(303);
            } else {
                items.push(item);

                return h.response(item).code(201);
            }

        }
    });

    server.route({
        method: 'DELETE',
        path: '/items/{itemId}',
        handler: (request, h) => {
            const {itemId} = request.params;
            const item = items.find((cust) => it.itemId === itemId);

            if (!item) {
                return h.response().code(404);
            }

            let newitems = [];

            items.forEach((it) => {
                if (it.itemId !== itemId) {
                    newitems.push(it);
                }
            });

            items = newitems;

            return '';
        }
    });

    server.route({
        method: 'PUT',
        path: '/items/{itemId}',
        handler: (request, h) => {
            const {itemId} = request.params;
            const updateditem = request.payload;

            if (itemId !== updateditem.itemId) {
                return h.response().code(409);
            }

            let newitems = [];

            items.forEach((it) => {
                if (it.itemId === itemId) {
                    newitems.push(updateditem);
                } else {
                    newitems.push(it);
                }
            });

            items = newitems;

            return '';
        }
    });

    server.route({
        method: 'GET',
        path: '/cart/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const cart = cart.find((cust) => cust.customerId === customerId);

            if (!cart) {
                return h.response().code(404);
            }

            return cart;
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
