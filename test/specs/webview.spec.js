const WebViewPage = require('../pageobjects/webview.page');
const expect = require('chai').expect;

describe('WebView Screen Tests', () => {
    it('should load the correct WebView URL', async () => {
        await WebViewPage.webView.click();
        await WebViewPage.switchToWebViewContext();

        const currentUrl = await driver.getUrl();
        expect(currentUrl).to.include('webdriver.io');
    });
});
