const { expect } = require('@wdio/globals')
import homePage from '../pageobjects/home.page';


const HomePage = require('../pageobjects/home.page');

describe('Home Screen Tests', () => {
    it('should navigate to the Login screen', async () => {
       const webdriverIO = await homePage.webdriverioText.isDisplayed();
       expect(webdriverIO).to.be.true();
      
    });
    it('should navigate to the Forms screen', async () => {
        const webdriverTextVal = await homePage.webdriverText.isDisplayed();
        expect(webdriverTextVal).to.be.true();
    });
});
