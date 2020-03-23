const uuid = require('uuid');

const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../../repositories/customer-repository');

describe('customer repository', () => {
    let expectedCustomerId,
        expectedFirstName,
        expectedLastName,
        expectedEmail,
        expectedCustomer;

    beforeEach(() => {
        expectedCustomerId = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28';
        expectedFirstName = 'Jason';
        expectedLastName = 'Bradley';
        expectedEmail = 'jason.bradley@drake.edu';

        expectedCustomer = {
            'customer_id': expectedCustomerId,
            'first_name': expectedFirstName,
            'last_name': expectedLastName,
            'email': expectedEmail
        };
    });

    describe('selectCustomers', () => {
        it('should return all the customers', () => {
            const actualCustomers = selectCustomers();
            const [actualFirstCustomer] = actualCustomers.rows;

            expect(actualFirstCustomer).toEqual(expectedCustomer);
        });
    });

    describe('selectCustomerByCustomerId', () => {
        it('should return a specific customer by customerId', () => {
            const actualFirstCustomer = selectCustomerByCustomerId(expectedCustomerId);

            expect(actualFirstCustomer).toEqual({
                'customer_id': expectedCustomerId,
                'first_name': expectedFirstName,
                'last_name': expectedLastName,
                'email': expectedEmail
            });
        });
    });

});