import generator from "../../helper/generator";
import checkoutPage from "../../pageobjects/checkoutConfirmation";
import Homepage from "../../pageobjects/Homepage";
import loginPage from "../../pageobjects/login.page";
import navbar from "../../pageobjects/navbar";
import productDetails from "../../pageobjects/productDetails";
import productPage from "../../pageobjects/productPage";
import shoppingCart from "../../pageobjects/shoppingCart";
import subnav from "../../pageobjects/subnav";

describe("Cart", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await Homepage.open();
        await navbar.loginRegisterBtn.waitForClickable();
        await navbar.loginRegisterBtn.click();
        await loginPage.login("Cahya123", "Cahya123");
        await subnav.ApparelAccesories.waitForClickable();
        await subnav.ApparelAccesories.click();
        await productPage.productDetails();
        await productDetails.addProductToCart();
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.refresh();
    });

    it("should be able to edit quantity", async () => {
        await shoppingCart.quantityField.waitForDisplayed();
        const quantity = generator.generateNumber();
        await shoppingCart.quantityField.setValue(quantity);
        const quantityValue = await shoppingCart.quantityField.getValue();
        await expect(shoppingCart.quantityField).toHaveValue(quantityValue);
    });

    it("should be able to update quantity", async () => {
        await shoppingCart.quantityField.waitForDisplayed();
        const quantity = generator.generateNumber();
        await shoppingCart.quantityField.setValue(quantity);
        await shoppingCart.updateQtyBtn.waitForClickable();
        await shoppingCart.updateQtyBtn.click();
    });

    it("should be able to remove cart", async () => {
        await shoppingCart.removeCart.waitForDisplayed();
        await shoppingCart.removeCart.click();
        await expect(shoppingCart.emptyCartMsg).toBeDisplayed();
    });

    it("should be able to checkout product", async () => {
        await shoppingCart.checkoutBtn.waitForClickable();
        await shoppingCart.checkoutBtn.click();
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=checkout/confirm"
        );
        await expect(CheckoutConfirmation.confirmProduct).toBeDisplayed();
    });
});
