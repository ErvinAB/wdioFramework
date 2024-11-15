class WebViewPage {
    get webView() { return $('~WebView'); }

    async switchToWebViewContext() {
        const contexts = await driver.getContexts();
        await driver.switchContext(contexts.find(context => context.includes('WEBVIEW')));
    }
}

module.exports = new WebViewPage();
