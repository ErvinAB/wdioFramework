const { $ } = require('@wdio/globals')


class HomePage {
    get loginButton() { return $('~Login'); }
    get formsButton() { return $('~Forms'); }
    // Add other selectors here...

    async openLogin() { await this.loginButton.click(); }
    async openForms() { await this.formsButton.click(); }
    // Add other navigation actions...
}

module.exports = new HomePage();
