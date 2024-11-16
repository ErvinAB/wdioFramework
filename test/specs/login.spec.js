const LoginPage = require('../pageobjects/login.page');
const { expect } = require('chai');

describe('Login Page tests', () => {
    beforeEach(async () => {
        await LoginPage.navigateToLogin();  
    });

    // describe('Valid test', () =>{
    //     it('should log in with valid credentials', async () => {
    //         await LoginPage.login('validUser', 'validPass');
    //     });
    // });

    describe('invalid login', () => {
        it('should validate signup error msg', async() => {
            await LoginPage.invalidSignUp();
            const emailSUErrorMsgDisplayed = await LoginPage.errorMsgSUEmail.isDisplayed();
            expect(emailSUErrorMsgDisplayed).to.be.true;
            const paswordSUErrorMsgDisplayed = await LoginPage.errorMsgSUPw.isDisplayed();
            expect(paswordSUErrorMsgDisplayed).to.be.true();
            const paswordSUREErrorMsgDisplayed = await LoginPage.errorMsgReSUPw.isDisplayed();
            expect(paswordSUREErrorMsgDisplayed).to.be.true();
        });
    });

    describe('invalid signup', () => {
        it('should show correct errors when form is not filled', async () => {
            await LoginPage.invalidLogin();
            const emailErrorMsgDisplayed = await LoginPage.emailErrorMessage.isDisplayed();
            expect(emailErrorMsgDisplayed).to.be.true;
            const paswordErrorMsgDisplayed = await LoginPage.passwordErrorMessage.isDisplayed();
            expect(paswordErrorMsgDisplayed).to.be.true();
        });
    });
});

