import { $ } from "@wdio/globals";

class CheckoutConfirmation {
    get confirmProduct() {
        return $(".confirm_products");
    }

    get checkoutBtnCheckoutConfirmation(){
        return $("#checkout_btn")
    }
}

export default new CheckoutConfirmation();
