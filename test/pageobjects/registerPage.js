import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstName() {
        return $("#AccountFrm_firstname");
    }

    get minCharFirstnameMsg() {
        return $(
            '//span[contains(text(), "First Name must be between 1 and 32 characters!")]'
        );
    }

    get lastName() {
        return $("#AccountFrm_lastname");
    }

    get minCharLastnameMsg() {
        return $(
            '//span[contains(text(), "Last Name must be between 1 and 32 characters!")]'
        );
    }

    get email() {
        return $("#AccountFrm_email");
    }

    get emptyEmailMsg() {
        return $(
            '//span[contains(text(), "Email Address does not appear to be valid!")]'
        );
    }

    get phonenumber() {
        return $("#AccountFrm_telephone");
    }

    get fax() {
        return $("#AccountFrm_fax");
    }

    get company() {
        return $("#AccountFrm_company");
    }

    get firstAddress() {
        return $("#AccountFrm_address_1");
    }

    get minCharsFirstAddressMsg() {
        return $(
            '//span[contains(text(), "Address 1 must be between 3 and 128 characters!")]'
        );
    }

    get secondAddress() {
        return $("#AccountFrm_address_2");
    }

    get city() {
        return $("#AccountFrm_city");
    }

    get minCharCityMsg() {
        return $(
            "//span[contains(text(), 'City must be between 3 and 128 characters!')]"
        );
    }

    get region() {
        return $("#AccountFrm_zone_id");
    }

    get emptyRegionMsg() {
        return $("//span[contains(text(), 'Please select a region / state!')]");
    }

    get zipCode() {
        return $("#AccountFrm_postcode");
    }

    get minCharZipCode() {
        return $(
            "//span[contains(text(), 'Zip/postal code must be between 3 and 10 characters!')]"
        );
    }

    get country() {
        return $("#AccountFrm_country_id");
    }

    get emptyCountryMsg() {
        return $("//span[contains(text(), 'Please select a country!')]");
    }

    get loginName() {
        return $("#AccountFrm_loginname");
    }

    get minCharLoginNameMsg() {
        return $(
            "//span[contains(text(), 'Login name must be alphanumeric only and between 5 and 64 characters!')]"
        );
    }

    get duplicateLoginNameMsg() {
        return $(
            "//span[contains(text(), 'This login name is not available. Try different login name!')]"
        );
    }

    get password() {
        return $("#AccountFrm_password");
    }

    get minCharPasswordMsg() {
        return $(
            '//span[contains(text(), "Password must be between 4 and 20 characters!")]'
        );
    }

    get confirmPassword() {
        return $("#AccountFrm_confirm");
    }

    get yesSubscribeLetter() {
        return $("#AccountFrm_newsletter1");
    }

    get noSubscribeLetter() {
        return $("#AccountFrm_newsletter0");
    }

    get privacyPolicyCheckbox() {
        return $("#AccountFrm_agree");
    }

    get privacyPolicyHyperlink() {
        return $('//b[contains(text(), "Privacy Policy")]');
    }

    get privacyPolicyModal() {
        return $("#privacyPolicyModal");
    }

    get closeBtnPrivacyPolicyModal() {
        return $(".modal-footer button");
    }

    get alertErrorMsg() {
        return $(".alert-error");
    }

    get continueBtn() {
        return $('button[title="Continue"]');
    }
}

export default new SecurePage();
