import { expect } from "@wdio/globals";
import navbar from "../pageobjects/navbar";
import homepage from "../pageobjects/Homepage";

describe("Navbar", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await homepage.open();
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.refresh();
    });

    it("should display the logo", async () => {
        await navbar.logo.waitForDisplayed();
        expect(navbar.logo).toBeDisplayed();
    });

    it("navigate to homepage on clicking logo button", async () => {
        await navbar.logo.waitForClickable();
        await navbar.logo.click();
        await expect(browser).toHaveUrl("https://automationteststore.com/");
    });

    it("navigate to login page on clicking login register button", async () => {
        await navbar.loginRegisterBtn.waitForClickable();
        await navbar.loginRegisterBtn.click();
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=account/login"
        );
    });

    it("navigate to special page on clicking special button", async () => {
        await navbar.specialsBtn.waitForClickable();
        await navbar.specialsBtn.click();
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=product/special"
        );
    });

    it("navigate to account page on clicking account button", async () => {
        await navbar.accountBtn.waitForClickable();
        await navbar.accountBtn.click();
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=account/login"
        );
    });

    it("dropdown is appear on hovering over account button", async () => {
        await navbar.accountBtn.waitForDisplayed();
        await navbar.accountBtn.moveTo();
        await expect(navbar.accountDropdownMenu).toBeDisplayed();
    });

    it("navigate to login page on clicking login button in account dropdown menu", async () => {
        await navbar.accountBtn.waitForDisplayed();
        await navbar.accountBtn.moveTo();
        await navbar.accountDropdownMenu.waitForDisplayed();
        await navbar.loginBtnAccountDropdownMenu.waitForClickable();
        await navbar.loginBtnAccountDropdownMenu.click();
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=account/login"
        );
    });

    it("navigate to invoice page on clicking check your order button in account dropdown menu", async () => {
        await navbar.accountBtn.waitForDisplayed();
        await navbar.accountBtn.moveTo();
        await navbar.accountDropdownMenu.waitForDisplayed();
        await navbar.checkYourOrderBtnAccountDropdownMenu.waitForClickable();
        await navbar.checkYourOrderBtnAccountDropdownMenu.click();
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=account/invoice"
        );
    });

    it("navigate to cart page on clicking cart button", async () => {
        await navbar.cartBtn.waitForClickable();
        await navbar.cartBtn.click();
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=checkout/cart"
        );
    });

    it("navigate to cart page on clicking checkout button", async () => {
        await navbar.checkoutBtn.waitForClickable();
        await navbar.checkoutBtn.click()
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=checkout/cart"
        );
    })
});
