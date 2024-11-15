class LoginPage {
    get usernameField() { return $('~username'); }
    get passwordField() { return $('~password'); }
    get loginButton() { return $('~login'); }
    get errorMessage() { return $('~error-message'); }
    get successMessage() { return $('~success-message'); }
    get biometricLoginButton() { return $('~biometric-login'); }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async biometricLogin() {
        await this.biometricLoginButton.click();
    }
}

module.exports = new LoginPage();
