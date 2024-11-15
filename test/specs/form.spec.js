const FormsPage = require('../pageobjects/forms.page');
const expect = require('chai').expect;

describe('Forms Screen Tests', () => {
    it('should fill out the form and submit', async () => {
        await FormsPage.fillForm('sample text');
        expect(await FormsPage.successMessage.isDisplayed()).to.be.true;
    });

    it('should toggle the switch', async () => {
        await FormsPage.switch.click();
        const switchStatus = await FormsPage.switch.getAttribute('checked');
        expect(switchStatus).to.equal('true'); // Ensure switch is toggled on
    });
});
