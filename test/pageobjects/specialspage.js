import { $ } from "@wdio/globals";

class SpecialPage {
    get specialPage() {
        return $(".product-special");
    }

    get loginRegisterBtn() {
        return $("#customer_menu_top");
    }
}

export default new SpecialPage();
