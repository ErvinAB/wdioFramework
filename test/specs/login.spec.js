const LoginPage = require('../pageobjects/login.page');
const expect = require('chai').expect;

describe('Login Screen Tests', () => {
    it('should log in with valid credentials', async () => {
        await LoginPage.login('validUser', 'validPass');
        expect(await LoginPage.successMessage.isDisplayed()).to.be.true;
    });

    it('should display an error with invalid credentials', async () => {
        await LoginPage.login('invalidUser', 'invalidPass');
        expect(await LoginPage.errorMessage.isDisplayed()).to.be.true;
    });

    it('should log in with biometric authentication', async () => {
        await LoginPage.biometricLogin();
        expect(await LoginPage.successMessage.isDisplayed()).to.be.true;
    });
});
