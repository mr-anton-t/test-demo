import Page from './page';

const SELECTORS = {
    PAGE: 'div.login_wrapper',
    LOGIN_FIELD: 'input[data-test="username"]',      // same as input#user-name
    PASSWORD_FIELD: 'input[data-test="password"]',   // same as input#password
    BUTTON_SUBMIT: 'input[data-test="login-button"]', // same as input.submit-button
    ERROR_MESSAGE: 'div.error h3[data-test="error"]'
};

class LoginPage extends Page {
    constructor() {
        super(SELECTORS.PAGE);
    }

    public get inputUsername() {
        return this.page.$(SELECTORS.LOGIN_FIELD);
    }

    public get inputPassword() {
        return this.page.$(SELECTORS.PASSWORD_FIELD);
    }

    public get btnSubmit() {
        return this.page.$(SELECTORS.BUTTON_SUBMIT);
    }

    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public get errorMessage() {
        return this.page.$(SELECTORS.ERROR_MESSAGE);
    }

}

export default new LoginPage();
