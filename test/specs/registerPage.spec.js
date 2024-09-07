import generator from "../helper/generator";
import Homepage from "../pageobjects/Homepage";
import loginpage from "../pageobjects/login.page";
import navbar from "../pageobjects/navbar";
import registerPage from "../pageobjects/registerPage";
import successRegister from "../pageobjects/successRegister";

describe("Register page", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await Homepage.open();
        await navbar.loginRegisterBtn.waitForClickable();
        await navbar.loginRegisterBtn.click();
        await loginpage.continueBtn.waitForClickable();
        await loginpage.continueBtn.click();
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.refresh();
    });

    it("Should be able to fill the firstname", async () => {
        await registerPage.firstName.waitForDisplayed();
        const firstname = generator.generateUniqueName();
        await registerPage.firstName.setValue(firstname);
        const firstnameValue = await registerPage.firstName.getValue();
        await expect(registerPage.firstName).toHaveValue(firstnameValue);
    });

    it("Should be able to show message when firstname is more than 32 characters", async () => {
        await registerPage.firstName.waitForDisplayed();
        await registerPage.firstName.setValue(
            "Gabrielle Abigail Limuria Francesc"
        );
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharFirstnameMsg).toBeDisplayed();
    });

    it("Should be able to fill the lastname", async () => {
        await registerPage.lastName.waitForDisplayed();
        const lastname = generator.generateUniqueName();
        await registerPage.lastName.setValue(lastname);
        const lastnameValue = await registerPage.lastName.getValue();
        await expect(registerPage.lastName).toHaveValue(lastnameValue);
    });

    it("Should be able to show message when lastname is more than 32 characters", async () => {
        await registerPage.lastName.waitForDisplayed();
        await registerPage.lastName.setValue(
            "Gabrielle Abigail Limuria Francesc"
        );
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharLastnameMsg).toBeDisplayed();
    });

    it("Should be able to fill email", async () => {
        await registerPage.email.waitForDisplayed();
        const email = generator.generateUniqueName();
        await registerPage.email.setValue(email + "@example.com");
        const emailValue = await registerPage.email.getValue();
        await expect(registerPage.email).toHaveValue(emailValue);
    });

    it("Should be able to show message when email is empty", async () => {
        await registerPage.email.waitForDisplayed();
        await registerPage.email.setValue("");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.emptyEmailMsg).toBeDisplayed();
    });

    it("Should be able to fill phonenumber", async () => {
        await registerPage.phonenumber.waitForDisplayed();
        const phoneNumber = generator.generatePhonenumber();
        await registerPage.phonenumber.setValue("08" + phoneNumber);
        const phoneNumberValue = await registerPage.phonenumber.getValue();
        await expect(registerPage.phonenumber).toHaveValue(phoneNumberValue);
    });

    it("Should be able to fill fax", async () => {
        await registerPage.fax.waitForDisplayed();
        const fax = generator.generatePhonenumber();
        await registerPage.fax.setValue(fax);
        const faxValue = await registerPage.fax.getValue();
        await expect(registerPage.fax).toHaveValue(faxValue);
    });

    it("Should be able to fill company", async () => {
        await registerPage.company.waitForDisplayed();
        const company = generator.generateUniqueName();
        await registerPage.company.setValue(company);
        const companyValue = await registerPage.company.getValue();
        await expect(registerPage.company).toHaveValue(companyValue);
    });

    it("Should be able to fill first address", async () => {
        await registerPage.firstAddress.waitForDisplayed();
        const firstAddress = generator.generateUniqueName();
        await registerPage.firstAddress.setValue(firstAddress);
        const firstAddressValue = await registerPage.firstAddress.getValue();
        await expect(registerPage.firstAddress).toHaveValue(firstAddressValue);
    });

    it("Should be able to show message when first address is between 3 and 128 characters", async () => {
        await registerPage.firstAddress.waitForDisplayed();
        await registerPage.firstAddress.setValue("");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharsFirstAddressMsg).toBeDisplayed();
    });

    it("Should be able to fill second message", async () => {
        await registerPage.secondAddress.waitForDisplayed();
        const secondAddress = generator.generateUniqueName();
        await registerPage.secondAddress.setValue(secondAddress);
        const secondAddressValue = await registerPage.secondAddress.getValue();
        await expect(registerPage.secondAddress).toHaveValue(
            secondAddressValue
        );
    });

    it("Should be able to fill city", async () => {
        await registerPage.city.waitForDisplayed();
        const city = generator.generateUniqueName();
        await registerPage.city.setValue(city);
        const cityValue = await registerPage.city.getValue();
        await expect(registerPage.city).toHaveValue(cityValue);
    });

    it("Should be able to show message when city is between 3 and 128 characters", async () => {
        await registerPage.city.waitForDisplayed();
        await registerPage.city.setValue("");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharCityMsg).toBeDisplayed();
    });

    it("Should be able to select region dropdown", async () => {
        await registerPage.region.waitForDisplayed();
        await registerPage.region.click();
        await registerPage.region.selectByVisibleText("Anglesey");
    });

    it("Should be able to show message when region is empty", async () => {
        await registerPage.region.waitForDisplayed();
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.emptyRegionMsg).toBeDisplayed();
    });

    it("Should be able to fill ZIP Code", async () => {
        await registerPage.zipCode.waitForDisplayed();
        const zipCode = generator.generateZipCode();
        await registerPage.zipCode.setValue(zipCode);
        const zipCodeValue = await registerPage.zipCode.getValue();
        await expect(registerPage.zipCode).toHaveValue(zipCodeValue);
    });

    it("Should be able to show message when ZIP code is not between 3 and 10 characters", async () => {
        await registerPage.zipCode.waitForDisplayed();
        await registerPage.zipCode.setValue("");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharZipCode).toBeDisplayed();
    });

    it("Should be able to country is select United Kingdom automatically", async () => {
        await registerPage.country.waitForDisplayed();
        const countryValue = await registerPage.country.getValue();
        await expect(countryValue).toBe("222");
    });

    it("Should be able to choose country", async () => {
        await registerPage.country.waitForDisplayed();
        await registerPage.country.click();
        await registerPage.country.selectByVisibleText("Afghanistan");
        const countryValue = await registerPage.country.getValue();
        await expect(countryValue).toBe("1");
    });

    it("Should be able to show message when country is not selected", async () => {
        await registerPage.country.waitForDisplayed();
        await registerPage.country.click();
        await registerPage.country.selectByVisibleText(
            " --- Please Select --- "
        );
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.emptyCountryMsg).toBeDisplayed();
    });

    it("Should be able to fill loginname", async () => {
        await registerPage.loginName.waitForDisplayed();
        const loginName = generator.generateUniqueName();
        await registerPage.loginName.setValue(loginName);
        const loginNameValue = await registerPage.loginName.getValue();
        await expect(registerPage.loginName).toHaveValue(loginNameValue);
    });

    it("Should be able to show message when loginname is empty", async () => {
        await registerPage.loginName.waitForDisplayed();
        await registerPage.loginName.setValue("");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharLoginNameMsg).toBeDisplayed();
    });

    it("Should be able to show message when loginname is dupilicate", async () => {
        await registerPage.loginName.waitForDisplayed();
        await registerPage.loginName.setValue("Abigail24")
        await registerPage.continueBtn.waitForClickable()
        await registerPage.continueBtn.click()
        await expect(registerPage.duplicateLoginNameMsg).toBeDisplayed()
    })

    it("Should be able to fill password", async () => {
        await registerPage.password.waitForDisplayed();
        const password = generator.generatePassword();
        await registerPage.password.setValue(password);
        const passwordValue = await registerPage.password.getValue();
        await expect(registerPage.password).toHaveValue(passwordValue);
    });

    it("Should be able password to hide the password", async () => {
        await registerPage.password.waitForDisplayed();
        const password = generator.generatePassword();
        await registerPage.password.setValue(password);
        await expect(registerPage.password).toHaveAttribute("type", "password");
    });

    it("Should be able to show message if password is not between 4 and 20 characters", async () => {
        await registerPage.password.waitForDisplayed();
        await registerPage.password.setValue("123");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharPasswordMsg).toBeDisplayed();
    });

    it("Should be able to fill the confirm password", async () => {
        await registerPage.confirmPassword.waitForDisplayed();
        const confirmPassword = generator.generatePassword();
        await registerPage.confirmPassword.setValue(confirmPassword);
        const confirmPasswordValue =
            await registerPage.confirmPassword.getValue();
        await expect(registerPage.confirmPassword).toHaveValue(
            confirmPasswordValue
        );
    });

    it("Should be able to choose yes for subscribe letter", async () => {
        await registerPage.yesSubscribeLetter.waitForClickable();
        await registerPage.yesSubscribeLetter.click();
    });

    it("Should be able to choose no for subscribe letter", async () => {
        await registerPage.noSubscribeLetter.waitForClickable();
        await registerPage.noSubscribeLetter.click();
    });

    it("Should be able to check privacy policy", async () => {
        await registerPage.privacyPolicyCheckbox.waitForClickable();
        await registerPage.privacyPolicyCheckbox.click();
    });

    it("Should be able to show privacy policy modal", async () => {
        await registerPage.privacyPolicyHyperlink.waitForClickable();
        await registerPage.privacyPolicyHyperlink.click();
        await expect(registerPage.privacyPolicyModal).toBeDisplayed();
    });

    it("Should be able to close the privacy policy modal", async () => {
        await registerPage.privacyPolicyHyperlink.waitForClickable();
        await registerPage.privacyPolicyHyperlink.click();
        await registerPage.privacyPolicyModal.waitForDisplayed();
        await registerPage.closeBtnPrivacyPolicyModal.waitForClickable();
        await registerPage.closeBtnPrivacyPolicyModal.click();
        await expect(registerPage.privacyPolicyModal).not.toBeDisplayed();
    });

    it("Should be able to show alert message if password and confirm password are not same", async () => {
        const value = generator.generateUniqueName()
        await registerPage.firstName.waitForDisplayed();
        await registerPage.firstName.setValue(value);
        await registerPage.lastName.waitForDisplayed();
        await registerPage.lastName.setValue(value);
        await registerPage.email.waitForDisplayed();
        await registerPage.email.setValue(value + "@example.com");
        await registerPage.phonenumber.waitForDisplayed();
        const phoneNumber = generator.generatePhonenumber();
        await registerPage.phonenumber.setValue("08" + phoneNumber);
        await registerPage.fax.waitForDisplayed();
        const fax = generator.generatePhonenumber();
        await registerPage.fax.setValue(fax);
        await registerPage.company.waitForDisplayed();
        await registerPage.company.setValue(value);
        await registerPage.firstAddress.waitForDisplayed();
        await registerPage.firstAddress.setValue(value);
        await registerPage.city.waitForDisplayed();
        const city = generator.generateUniqueName();
        await registerPage.city.setValue(city);
        await registerPage.region.waitForDisplayed();
        await registerPage.region.click();
        await registerPage.region.selectByVisibleText("Anglesey");
        await registerPage.zipCode.waitForDisplayed();
        const zipCode = generator.generateZipCode();
        await registerPage.zipCode.setValue(zipCode);
        await registerPage.country.waitForDisplayed();
        await registerPage.country.click();
        await registerPage.country.selectByVisibleText("Afghanistan");
        await registerPage.loginName.waitForDisplayed();
        await registerPage.loginName.setValue(value);
        await registerPage.confirmPassword.waitForDisplayed();
        const confirmPassword = generator.generatePassword();
        await registerPage.confirmPassword.setValue(confirmPassword);
        await registerPage.password.waitForDisplayed();
        const password = generator.generatePassword();
        await registerPage.password.setValue(password);
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.alertErrorMsg).toBeDisplayed();
    });

    it("Should be able to show message is privacy policy is not selected", async () => {
        const value = generator.generateUniqueName()
        await registerPage.firstName.waitForDisplayed();
        await registerPage.firstName.setValue(value);
        await registerPage.lastName.waitForDisplayed();
        await registerPage.lastName.setValue(value);
        await registerPage.email.waitForDisplayed();
        await registerPage.email.setValue(value + "@example.com");
        await registerPage.phonenumber.waitForDisplayed();
        const phoneNumber = generator.generatePhonenumber();
        await registerPage.phonenumber.setValue("08" + phoneNumber);
        await registerPage.fax.waitForDisplayed();
        const fax = generator.generatePhonenumber();
        await registerPage.fax.setValue(fax);
        await registerPage.company.waitForDisplayed();
        await registerPage.company.setValue(value);
        await registerPage.firstAddress.waitForDisplayed();
        await registerPage.firstAddress.setValue(value);
        await registerPage.city.waitForDisplayed();
        await registerPage.city.setValue(value);
        await registerPage.region.waitForDisplayed();
        await registerPage.region.click();
        await registerPage.region.selectByVisibleText("Anglesey");
        await registerPage.zipCode.waitForDisplayed();
        const zipCode = generator.generateZipCode();
        await registerPage.zipCode.setValue(zipCode);
        await registerPage.country.waitForDisplayed();
        await registerPage.country.click();
        await registerPage.country.selectByVisibleText("Afghanistan");
        await registerPage.loginName.waitForDisplayed();
        await registerPage.loginName.setValue(value);
        await registerPage.confirmPassword.waitForDisplayed();
        await registerPage.confirmPassword.setValue("cahya1234");
        await registerPage.password.waitForDisplayed();
        await registerPage.password.setValue("cahya1234");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.alertErrorMsg).toBeDisplayed();
    });

    it("Should be able to register account", async () => {
        const value = generator.generateUniqueName()
        await registerPage.firstName.waitForDisplayed();
        await registerPage.firstName.setValue(value);
        await registerPage.lastName.waitForDisplayed();
        await registerPage.lastName.setValue(value);
        await registerPage.email.waitForDisplayed();
        await registerPage.email.setValue(value + "@example.com");
        await registerPage.phonenumber.waitForDisplayed();
        const phoneNumber = generator.generatePhonenumber();
        await registerPage.phonenumber.setValue("08" + phoneNumber);
        await registerPage.fax.waitForDisplayed();
        const fax = generator.generatePhonenumber();
        await registerPage.fax.setValue(fax);
        await registerPage.company.waitForDisplayed();
        await registerPage.company.setValue(value);
        await registerPage.firstAddress.waitForDisplayed();
        await registerPage.firstAddress.setValue(value);
        await registerPage.city.waitForDisplayed();
        await registerPage.city.setValue(value);
        await registerPage.country.waitForDisplayed();
        await registerPage.country.click();
        await registerPage.country.selectByVisibleText("Australia");
        await registerPage.region.waitForDisplayed();
        await registerPage.region.click();
        await browser.waitUntil(
            async () => {
                const regionOption = await registerPage.region.$(
                    "option*=Queensland"
                );
                return regionOption.isExisting();
            },
            {
                timeout: 5000,
                timeoutMsg:
                    "Opsi 'Queensland' tidak ditemukan di region dropdown",
            }
        );
        await registerPage.region.selectByVisibleText("Queensland");
        await registerPage.zipCode.waitForDisplayed();
        const zipCode = generator.generateZipCode();
        await registerPage.zipCode.setValue(zipCode);
        await registerPage.loginName.waitForDisplayed();
        await registerPage.loginName.setValue(value);
        await registerPage.confirmPassword.waitForDisplayed();
        await registerPage.confirmPassword.setValue("cahya1234");
        await registerPage.password.waitForDisplayed();
        await registerPage.password.setValue("cahya1234");
        await registerPage.privacyPolicyCheckbox.waitForClickable();
        await registerPage.privacyPolicyCheckbox.click();
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(browser).toHaveUrl(
            "https://automationteststore.com/index.php?rt=account/success"
        );
        await expect(successRegister.successMsg).toBeDisplayed();
    });
});
