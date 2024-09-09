import { $ } from "@wdio/globals";

class subnav {
    get ApparelAccesories() {
        return $(
            "a[href='https://automationteststore.com/index.php?rt=product/category&path=68']"
        );
    }
}

export default new subnav();
