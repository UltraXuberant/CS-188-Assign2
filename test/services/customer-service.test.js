const uuid = require('uuid');

const {
    getAllCustomers,
    getCustomerByCustomerId
} = require('../../services/customer-service');

const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../../repositories/customer-repository');

jest.mock('../../repositories/customer-repository');

describe('getAllCustomers', () => {
    let expectedCustomer,
        expectedCustomerId,
        expectedFirstName,
        expectedLastName,
        expectedEmail;

    beforeEach(() => {
        expectedCustomerId = uuid.v4();
        expectedFirstName = 'Timmy';
        expectedLastName = 'Tommington';
        expectedEmail = 'timmy.tommington@drake.edu';

        expectedCustomer = {
            customerId: expectedCustomerId,
            firstName: expectedFirstName,
            lastName: expectedLastName,
            email: expectedEmail
        };

        selectCustomers.mockReturnValue({
            rows: [{
                'customer_id': expectedCustomerId,
                'first_name': expectedFirstName,
                'last_name': expectedLastName,
                'email': expectedEmail
            }]
        });

        /*
        selectCustomerByCustomerId.mockReturnValue({
            rows: [{
                'customer_id': expectedCustomerId,
                'first_name': expectedFirstName,
                'last_name': expectedLastName,
                'email': expectedEmail
            }]
        });
        */

        selectCustomerByCustomerId.mockReturnValue({
            'customer_id': expectedCustomerId,
            'first_name': expectedFirstName,
            'last_name': expectedLastName,
            'email': expectedEmail
        })
    });

    it('should get all the carts', () => {
        const actualCustomers = getAllCustomers();

        expect(selectCustomers).toHaveBeenCalledTimes(1);

        expect(actualCustomers).toEqual([
            expectedCustomer
        ]);
    });

    it('should get a customer by a specific customerId', () => {
        const actualCustomer = getCustomerByCustomerId(expectedCustomerId);

        expect(selectCustomerByCustomerId).toHaveBeenCalledTimes(1);
        expect(selectCustomerByCustomerId).toHaveBeenCalledWith(expectedCustomerId);

        expect(actualCustomer).toEqual(expectedCustomer);
    });
});