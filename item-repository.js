let items = [
    {
        'description': 'Drake Sweatpants',
        'image': 'https://i.pinimg.com/236x/a4/45/eb/a445eb4e5562a94093fb7555be62446a--couch-drake.jpg',
        'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
        'price': 30
    },
    {
        'description': 'Drake Sweatshirt',
        'image': 'https://bkstr.scene7.com/is/image/Bkstr/1623-CS1220-P2082781-Black',
        'item_id': '22e83b18-bf9e-4797-b859-6c3497e0da37',
        'price': 50
    }
];

const selectItems = () => ({
    rows: items
});

const selectItemByItemId = (itemId) =>
    items.find((item) => item['item_id'] === itemId);

const insertItem = (item) => items.push(item);

const updateItem = (updatedItem) => {
    const itemsThatDontMatch = items.filter((item) =>
        item['item_id'] !== updatedItem['item_id']
    );

    items = [
        ...itemsThatDontMatch,
        updatedItem
    ];
};

const deleteItemByItemId = (itemId) => {
    items = items.filter((item) =>
        item['item_id'] !== itemId
    );
};

module.exports = {
    deleteItemByItemId,
    insertItem,
    selectItemByItemId,
    selectItems,
    updateItem
};
