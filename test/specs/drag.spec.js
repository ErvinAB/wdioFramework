const DragPage = require('../pageobjects/drag.page');
const expect = require('chai').expect;

describe('Drag Screen Tests', () => {
    it('should drag the item to the target', async () => {
        await DragPage.dragToTarget();
        
    });
});
