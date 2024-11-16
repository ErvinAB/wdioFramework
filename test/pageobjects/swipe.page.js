class SwipePage {
    get carouselItem() { return $('//android.widget.TextView[@text="JS.FOUNDATION"]'); }

    async swipeLeft() {
        await driver.touchAction([
            { action: 'press', x: 300, y: 500 },
            { action: 'moveTo', x: 100, y: 500 },
            'release'
        ]);
    }
}

module.exports = new SwipePage();
