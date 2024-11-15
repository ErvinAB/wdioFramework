class FormsPage {
    get inputField() { return $('~input'); }
    get switch() { return $('~switch'); }
    get dropdown() { return $('~dropdown'); }
    get submitButton() { return $('~submit'); }
    get successMessage() { return $('~success-message'); }

    async fillForm(text) {
        await this.inputField.setValue(text);
        await this.switch.click();
        await this.dropdown.selectByVisibleText('Option 2');
        await this.submitButton.click();
    }
}

module.exports = new FormsPage();
