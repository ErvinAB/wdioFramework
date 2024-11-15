const SwipePage = require('../pageobjects/swipe.page');
const expect = require('chai').expect;

describe('Swipe Screen Tests', () => {
    it('should swipe left in the carousel', async () => {
        await SwipePage.swipeLeft();
        expect(await SwipePage.carouselItem.isDisplayed()).to.be.true;
    });
});
