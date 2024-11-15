const { expect } = require('@wdio/globals')


const HomePage = require('../pageobjects/home.page');

describe('Home Screen Tests', () => {
    it('should navigate to the Login screen', async () => {
        await HomePage.openLogin();
        // Add assertion to confirm Login screen opened
    });
    it('should navigate to the Forms screen', async () => {
        await HomePage.openForms();
        // Add assertion to confirm Forms screen opened
    });
});
