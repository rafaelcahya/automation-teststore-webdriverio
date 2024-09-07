import Homepage from "../pageobjects/Homepage";
import loginPage from "../pageobjects/login.page";
import navbar from "../pageobjects/navbar";

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

    it.only("navigate to register page on clicking on continue button", async () => {
        await loginPage.continueBtn.waitForClickable();
        await loginPage.continueBtn.click();
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=account/create"
        );
    });
});
