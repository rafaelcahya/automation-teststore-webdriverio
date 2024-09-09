import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get loginName() {
        return $("#loginFrm_loginname");
    }

    get password() {
        return $("#loginFrm_password");
    }

    get alertErrorMsg() {
        return $(".alert-error");
    }

    get loginBtn(){
        return $('button[title="Login"]')
    }

    get continueBtn() {
        return $('button[title="Continue"]');
    }

    async login(loginName, password) {
        await this.loginName.waitForDisplayed();
        await this.loginName.setValue(loginName);
        await this.password.waitForDisplayed();
        await this.password.setValue(password);
        await this.loginBtn.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
}

export default new LoginPage();
