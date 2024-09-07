import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class successRegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get successMsg() {
        return $(".maintext");
    }
}

export default new successRegisterPage();
