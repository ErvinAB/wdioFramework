const { $ } = require('@wdio/globals')


class HomePage {
get webdriverioText() {return $('//android.widget.TextView[@text="WEBDRIVER"]')}
get webdriverText() {return $('//android.widget.TextView[@text="Demo app for the appium-boilerplate"]')}
}

module.exports = new HomePage();
