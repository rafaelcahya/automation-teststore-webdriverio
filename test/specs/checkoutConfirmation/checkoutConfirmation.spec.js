import checkoutConfirmation from "../../pageobjects/checkoutConfirmation";
import Homepage from "../../pageobjects/Homepage";
import loginPage from "../../pageobjects/login.page";
import navbar from "../../pageobjects/navbar";
import productDetails from "../../pageobjects/productDetails";
import productPage from "../../pageobjects/productPage";
import shoppingCart from "../../pageobjects/shoppingCart";
import subnav from "../../pageobjects/subnav";
import successCheckout from "../../pageobjects/successCheckout";

describe("Checkout Confirmation", () => {
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
        await shoppingCart.checkoutProduct();
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.refresh();
    });

    it("Should be able to confirm the product", async () => {
        await checkoutConfirmation.checkoutBtnCheckoutConfirmation.waitForClickable();
        await checkoutConfirmation.checkoutBtnCheckoutConfirmation.click();
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=checkout/success"
        );
        await expect(successCheckout.successCheckoutMsg).toBeDisplayed();
    });
});
