class DragPage {
    get draggableElement() { return $('~draggable'); }
    get targetElement() { return $('~target'); }

    async dragToTarget() {
        await driver.touchAction([
            { action: 'longPress', element: this.draggableElement },
            { action: 'moveTo', element: this.targetElement },
            'release'
        ]);
    }
}

module.exports = new DragPage();
