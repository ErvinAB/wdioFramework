class DragPage {
    get swipeButton() {return $('//android.widget.TextView[@text="Swipe"]')}

    async navigateToSwap(){
        await this.swipeButton.click();
    }


    get draggableElement() { return $('(//android.view.ViewGroup[@content-desc="card"])[1]'); }
    get targetElement() { return $('(//android.view.ViewGroup[@content-desc="card"])[3]'); }

    async dragToTarget() {
        await driver.touchAction([
            { action: 'longPress', element: this.draggableElement },
            { action: 'moveTo', element: this.targetElement },
            'release'
        ]);
    }
}

module.exports = new DragPage();
