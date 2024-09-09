import Homepage from "../../pageobjects/Homepage";
import loginPage from "../../pageobjects/login.page";
import navbar from "../../pageobjects/navbar";
import productPage from "../../pageobjects/productPage";
import subnav from "../../pageobjects/subnav";

describe("Product Page - View", async () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await Homepage.open();
        await navbar.loginRegisterBtn.waitForClickable();
        await navbar.loginRegisterBtn.click();
        await loginPage.login("Cahya123", "Cahya123");
        await subnav.ApparelAccesories.waitForClickable();
        await subnav.ApparelAccesories.click();
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.refresh();
    });

    it("Should be able to view as list", async () => {
        await productPage.listView.waitForClickable();
        await productPage.listView.click();
		const thumbnailsElement = await $('div.thumbnails.list');
		const displayStyle = await thumbnailsElement.getCSSProperty('display');
		expect(displayStyle.value).toBe('block');
    });

    it("Should be able to grid as list", async () => {
        await productPage.gridView.waitForClickable();
        await productPage.gridView.click();
		const thumbnailsElement = await $('div.thumbnails.grid');
		const displayStyle = await thumbnailsElement.getCSSProperty('display');
		expect(displayStyle.value).toBe('block');
    });
});
