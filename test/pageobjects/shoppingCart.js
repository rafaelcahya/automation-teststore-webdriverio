import { $ } from "@wdio/globals";

class ShoppingCart {
    get cart() {
        return $(".product-list");
    }

    get quantityField() {
        return $(".short");
    }

    get removeCart() {
        return $(".btn .fa-trash-o");
    }

    get updateQtyBtn() {
        return $("#cart_update");
    }

    get checkoutBtn() {
        return $("#cart_checkout2");
    }

    get emptyCartMsg() {
        return $("//div[contains(text(), 'Your shopping cart is empty!')]");
    }

    async checkoutProduct() {
        await this.checkoutBtn.waitForClickable();
        await this.checkoutBtn.click();
    }
}

export default new ShoppingCart();
