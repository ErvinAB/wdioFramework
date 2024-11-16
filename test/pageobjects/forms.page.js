class FormsPage {

    get fromPageNav() {return $('//android.widget.TextView[@text="Forms"]')}

    async navigateToForms() {
        await this.fromPageNav.click();
    }

    get inputField() { return $('//android.widget.EditText[@content-desc="text-input"]'); }
    get switch() { return $('//android.widget.Switch[@content-desc="switch"]'); }
    get dropdown() { return $('//android.widget.EditText[@resource-id="text_input\]'); }
    get submitButton() { return $('//android.widget.TextView[@text="Active"]'); }
    get successMessage() { return $('//android.widget.TextView[@content-desc="input-text-result"]'); }

    async fillForm(text) {
        await this.inputField.setValue(text);
        await this.switch.click();
        await this.dropdown.selectByVisibleText('Option 2');
        await this.submitButton.click();
    }
}

module.exports = new FormsPage();
