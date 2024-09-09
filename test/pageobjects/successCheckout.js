class successCheckout {
    get successCheckoutMsg() {
        return $(
            "//span[contains(text(), 'Your Order Has Been Processed!')]"
        );
    }
}

export default new successCheckout();
