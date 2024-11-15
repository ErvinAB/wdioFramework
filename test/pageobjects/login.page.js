class LoginPage {
    get loginPageButton() { return $('//android.widget.TextView[@text="Login"]'); }

    async navigateToLogin() {
        await this.loginPageButton.click();
    }

    
    get usernameField() { return $('//android.widget.EditText[@content-desc="input-email"]'); }
    get passwordField() { return $('//android.widget.EditText[@content-desc="input-password"]'); }
    get loginButton() { return $('//android.widget.TextView[@text="LOGIN"]'); }
    get emailErrorMessage() {return $('//android.widget.TextView[@text="Please enter a valid email address"')}
    get passwordErrorMessage() {return $('//android.widget.TextView[@text="Please enter at least 8 characters"]')}
    get goToSignUpPage() {return $('//android.widget.TextView[@text="Sign up"]')}
    get enterEmailAdress() {return $('')}
    get enterPassword() {return $('')}
    get reEnterPassword() {return $('')}
    get errorMsgSUEmail () {return $('//android.widget.TextView[@text="Please enter a valid email address"]')}
    get errorMsgSUPw () {return $('//android.widget.TextView[@text="Please enter at least 8 characters"]')}
    get errorMsgReSUPw () {return $('//android.widget.TextView[@text="Please enter the same password"]')}
    get signUpButton () {return $('//android.widget.TextView[@text="SIGN UP"]')}

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async invalidLogin(){
        await this.loginButton.click();
    }

    async invalidSignUp() {
        await this.goToSignUpPage.click();
        await this.signUpButton.click();
    }

}

module.exports = new LoginPage();
