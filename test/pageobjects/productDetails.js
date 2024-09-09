import { $ } from "@wdio/globals";
import generator from "../helper/generator";

class productDetails {
    get productName() {
        return $(".productname span");
    }

    get productThumbnailsContainer() {
        return $(".thumbnails");
    }

    get productThumbnailsList() {
        return $$("ul.thumbnails li.producthtumb");
    }

    get sizeLabels() {
        return $$("form#product div.form-group div.input-group label");
    }

    get colorDropdown() {
        return $("#option345");
    }

    get colorLabels() {
        return $$("#option345 option");
    }

    get productQuantity() {
        return $("#product_quantity");
    }

    get productPrice() {
        return $(".productfilneprice");
    }

    get totalPrice() {
        return $(".total-price");
    }

    get reviewBtn() {
        return $("a[href='#review']");
    }

    get addToCartBtn() {
        return $(".cart");
    }

    get addToWishlistBtn() {
        return $(".wishlist_add");
    }

    get removeWishlistBtn() {
        return $(".wishlist_remove");
    }

    async addProductToCart() {
        const sizeLabels = await this.sizeLabels;
        const numberOfSize = sizeLabels.length;
        await expect(numberOfSize).toBeGreaterThan(0);
        const randomSizeIndex = Math.floor(Math.random() * numberOfSize);
        const randomSizeLabel = sizeLabels[randomSizeIndex];
        await randomSizeLabel.click();
        await this.colorDropdown.waitForClickable();
        await this.colorDropdown.click();
        const colorOptions = await this.colorLabels;
        const numberOfColor = colorOptions.length;
        await expect(numberOfColor).toBeGreaterThan(0);
        const randomColorIndex = Math.floor(Math.random() * numberOfColor);
        const randomColorLabel = colorOptions[randomColorIndex];
        await randomColorLabel.click();
        await this.productQuantity.waitForDisplayed();
        const quantity = generator.generateNumber();
        await this.productQuantity.setValue(quantity);
        await this.addToCartBtn.waitForClickable();
        await this.addToCartBtn.click();
    }
}

export default new productDetails();
