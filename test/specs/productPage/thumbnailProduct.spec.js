import Homepage from "../../pageobjects/Homepage";
import navbar from "../../pageobjects/navbar";
import loginPage from "../../pageobjects/login.page";
import productPage from "../../pageobjects/productPage";
import subnav from "../../pageobjects/subnav";
import productDetails from "../../pageobjects/productDetails";

describe("Product Page - Thumbnail Product", async () => {
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

    it("Should be able to navigate to product details on clicking product name", async () => {
        await productPage.productName.waitForDisplayed();
        const productName = await productPage.productName.getAttribute("title");
        await productPage.productName.click();
        await expect(productDetails.productName).toBeDisplayed();
        const productNameDetails = await productDetails.productName.getText();
        await expect(productNameDetails).toBe(productName);
    });

    it("Should be able show shortlink on hovering over thumbnail product", async () => {
        await productPage.thumbnailProduct.waitForDisplayed();
        await productPage.thumbnailProduct.moveTo();
        await expect(productPage.shortlinkProduct).toBeDisplayed();
    });

    it("Should be able to navigate to product details on clicking view button in shortlink", async () => {
        await productPage.productName.waitForDisplayed();
        const productName = await productPage.productName.getAttribute("title");
        await productPage.thumbnailProduct.waitForDisplayed();
        await productPage.thumbnailProduct.moveTo();
        await productPage.viewBtnShortlinkProduct.click();
        await expect(productDetails.productName).toBeDisplayed();
        const productNameDetails = await productDetails.productName.getText();
        await expect(productNameDetails).toBe(productName);
    });

    it("Should be able to navigate to product details and choose reviews on clicking write review button in shortlink", async () => {
        await productPage.productName.waitForDisplayed();
        const productName = await productPage.productName.getAttribute("title");
        await productPage.thumbnailProduct.waitForDisplayed();
        await productPage.thumbnailProduct.moveTo();
        await productPage.reviewBtnShortlinkProduct.click();
        await expect(productDetails.productName).toBeDisplayed();
        const productNameDetails = await productDetails.productName.getText();
        await expect(productNameDetails).toBe(productName);
        await productDetails.reviewBtn.waitForClickable();
        const listItem = await productDetails.reviewBtn.parentElement();
        await listItem.waitForDisplayed();
        await listItem.click();
        const classAttribute = await listItem.getAttribute("class");
        expect(classAttribute.split(" ")).toContain("active");
    });

    it("Should be able to navigate to product details on clicking add to cart button", async () => {
        await productPage.productName.waitForDisplayed();
        const productName = await productPage.productName.getAttribute("title");
        await productPage.addToCartBtn.waitForClickable();
        await productPage.addToCartBtn.click();
        await expect(productDetails.productName).toBeDisplayed();
        const productNameDetails = await productDetails.productName.getText();
        await expect(productNameDetails).toBe(productName);
    });
});
