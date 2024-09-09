import { $ } from "@wdio/globals";
import productDetails from "./productDetails";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage {
    /**
     * define selectors using getter methods
     */

    get sort() {
        return $("#sort");
    }

    get listView() {
        return $("#list");
    }

    get gridView() {
        return $("#grid");
    }

    get productName() {
        return $(".prdocutname");
    }

    get thumbnailProduct() {
        return $$(".thumbnail");
    }

    get shortlinkProduct() {
        return $(".shortlinks");
    }

    get viewBtnShortlinkProduct() {
        return $(".details");
    }

    get reviewBtnShortlinkProduct() {
        return $(".compare");
    }

    get addToCartBtn() {
        return $(".productcart");
    }

    get noStockBtn() {
        return $(".nostock");
    }

    async productDetails() {
        await this.productName.waitForDisplayed();
        const productName = await this.productName.getAttribute("title");
        await this.addToCartBtn.waitForClickable();
        await this.addToCartBtn.click();
        await expect(productDetails.productName).toBeDisplayed();
        const productNameDetails = await productDetails.productName.getText();
        await expect(productNameDetails).toBe(productName);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
}

export default new ProductPage();
