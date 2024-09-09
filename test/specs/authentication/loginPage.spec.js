import generator from "../../helper/generator";
import Homepage from "../../pageobjects/Homepage";
import loginPage from "../../pageobjects/login.page";
import navbar from "../../pageobjects/navbar";

describe("Login page", async () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await Homepage.open();
        await navbar.loginRegisterBtn.waitForClickable();
        await navbar.loginRegisterBtn.click();
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.refresh();
    });

    it("Should be able to fill the login name", async () => {
        const loginNameValue = generator.generateUniqueName();
        await loginPage.loginName.waitForDisplayed();
        await loginPage.loginName.setValue(loginNameValue);
        await expect(loginPage.loginName).toHaveValue(loginNameValue);
    });

    it("Should be able to fill the password", async () => {
        const password = generator.generateUniqueName();
        await loginPage.password.waitForDisplayed();
        await loginPage.password.setValue(password);
        await expect(loginPage.password).toHaveValue(password);
    });

    it("Should be able to show message when login with invalid credential", async () => {
        await loginPage.loginName.waitForDisplayed();
        await loginPage.loginName.setValue("1231231");
        await loginPage.password.waitForDisplayed();
        await loginPage.password.setValue("123123");
        await loginPage.loginBtn.waitForClickable();
        await loginPage.loginBtn.click();
        await expect(loginPage.alertErrorMsg).toBeDisplayed();
    });

    it("Should be able to login", async () => {
        await loginPage.login("Cahya123", "Cahya123");
    });
});
