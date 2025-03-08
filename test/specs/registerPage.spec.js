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

    it("Should be able to show message when firstname is less than 1 characters", async () => {
        await registerPage.firstName.waitForDisplayed();
        await registerPage.firstName.setValue(
            ""
        );
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharFirstnameMsg).toBeDisplayed();
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

    it("Should be able to show message when lastname is less than 1 characters", async () => {
        await registerPage.lastName.waitForDisplayed();
        await registerPage.lastName.setValue(
            ""
        );
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharLastnameMsg).toBeDisplayed();
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

    it("Should be able to show message when email is empty", async () => {
        await registerPage.email.waitForDisplayed();
        await registerPage.email.setValue("");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.emptyEmailMsg).toBeDisplayed();
    });

    it("Should be able to show message when first address is less than 3 characters", async () => {
        await registerPage.firstAddress.waitForDisplayed();
        await registerPage.firstAddress.setValue("US");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharsFirstAddressMsg).toBeDisplayed();
    });

    it("Should be able to show message when first address is more than 128 characters", async () => {
        await registerPage.firstAddress.waitForDisplayed();
        await registerPage.firstAddress.setValue("Jl. Merdeka Raya, Jakarta, Jawa Barat, 12345, Kelurahan Kebon Jeruk, Kecamatan Tanah Abang, Kota Jakarta, Indonesia, Alamat ini dibuat secara otomatis untuk keperluan testing");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharsFirstAddressMsg).toBeDisplayed();
    });

    it("Should be able to show message when city is less than 3 characters", async () => {
        await registerPage.city.waitForDisplayed();
        await registerPage.city.setValue("");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharCityMsg).toBeDisplayed();
    });

    it("Should be able to show message when city is more than 128 characters", async () => {
        await registerPage.city.waitForDisplayed();
        await registerPage.city.setValue("Jl. Merdeka Raya, Jakarta, Jawa Barat, 12345, Kelurahan Kebon Jeruk, Kecamatan Tanah Abang, Kota Jakarta, Indonesia, Alamat ini dibuat secara otomatis untuk keperluan testing");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharCityMsg).toBeDisplayed();
    });

    it("Should be able to show message when region is empty", async () => {
        await registerPage.region.waitForDisplayed();
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.emptyRegionMsg).toBeDisplayed();
    });

    it("Should be able to show message when ZIP code is less than 3 characters", async () => {
        await registerPage.zipCode.waitForDisplayed();
        await registerPage.zipCode.setValue("");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharZipCode).toBeDisplayed();
    });

    it("Should be able to show message when loginname is empty", async () => {
        await registerPage.loginName.waitForDisplayed();
        await registerPage.loginName.setValue("");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharLoginNameMsg).toBeDisplayed();
    });

    it("Should be able to show message when loginname is less than 5 characters", async () => {
        await registerPage.loginName.waitForDisplayed();
        await registerPage.loginName.setValue("");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharLoginNameMsg).toBeDisplayed();
    });

    it("Should be able to show message when loginname is more than 64 characters", async () => {
        await registerPage.loginName.waitForDisplayed();
        await registerPage.loginName.setValue("Gabrielle Abigail Limuria Francesc Rafael William Danish Android iOS");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharLoginNameMsg).toBeDisplayed();
    });

    it("Should be able to show message when loginname is duplicate", async () => {
        await registerPage.loginName.waitForDisplayed();
        await registerPage.loginName.setValue("Abigail24");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.duplicateLoginNameMsg).toBeDisplayed();
    });

    it("Should be able password to hide the password", async () => {
        await registerPage.password.waitForDisplayed();
        const password = generator.generatePassword();
        await registerPage.password.setValue(password);
        await expect(registerPage.password).toHaveAttribute("type", "password");
    });

    it("Should be able to show message if password is less than 3 characters", async () => {
        await registerPage.password.waitForDisplayed();
        await registerPage.password.setValue("123");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharPasswordMsg).toBeDisplayed();
    });

    it("Should be able to show message if password is more than 20 characters", async () => {
        await registerPage.password.waitForDisplayed();
        await registerPage.password.setValue("Gabrielle Abigail Limuria");
        await registerPage.continueBtn.waitForClickable();
        await registerPage.continueBtn.click();
        await expect(registerPage.minCharPasswordMsg).toBeDisplayed();
    });

    it("Should be able to show alert message if password and confirm password are not same", async () => {
        const value = generator.generateUniqueName();
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
        const value = generator.generateUniqueName();
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
        const value = generator.generateUniqueName();
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
