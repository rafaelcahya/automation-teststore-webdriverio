import Homepage from "../../pageobjects/Homepage";
import navbar from "../../pageobjects/navbar";
import loginPage from "../../pageobjects/login.page";
import productPage from "../../pageobjects/productPage";
import subnav from "../../pageobjects/subnav";

describe("Product Page - Filter", async () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await Homepage.open();
        await navbar.loginRegisterBtn.waitForClickable();
        await navbar.loginRegisterBtn.click();
        await loginPage.login("Cahya123", "Cahya123");
        await subnav.ApparelAccesories.waitForClickable();
        await subnav.ApparelAccesories.click();
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.refresh();
    });

    it("Should be able to filter by Date Old > New", async () => {
        await productPage.sort.waitForClickable();
        await productPage.sort.selectByVisibleText("Date Old > New");
        await expect(
            productPage.sort.$('option[value="date_modified-ASC"]')
        ).toHaveAttribute("selected", "true");
    });

    it("Should be able to filter by Name A - Z", async () => {
        await productPage.sort.waitForClickable();
        await productPage.sort.selectByVisibleText("Name A - Z");
        await expect(
            productPage.sort.$('option[value="pd.name-ASC"]')
        ).toHaveAttribute("selected", "true");
    });

    it("Should be able to filter by Name Z - A", async () => {
        await productPage.sort.waitForClickable();
        await productPage.sort.selectByVisibleText("Name Z - A");
        await expect(
            productPage.sort.$('option[value="pd.name-DESC"]')
        ).toHaveAttribute("selected", "true");
    });

    it("Should be able to filter by Price Low > High", async () => {
        await productPage.sort.waitForClickable();
        await productPage.sort.selectByVisibleText("Price Low > High");
        await expect(
            productPage.sort.$('option[value="p.price-ASC"]')
        ).toHaveAttribute("selected", "true");
    });

    it("Should be able to filter by Price High > Low", async () => {
        await productPage.sort.waitForClickable();
        await productPage.sort.selectByVisibleText("Price High > Low");
        await expect(
            productPage.sort.$('option[value="p.price-DESC"]')
        ).toHaveAttribute("selected", "true");
    });

    it("Should be able to filter by Rating Highest", async () => {
        await productPage.sort.waitForClickable();
        await productPage.sort.selectByVisibleText("Rating Highest");
        await expect(
            productPage.sort.$('option[value="rating-DESC"]')
        ).toHaveAttribute("selected", "true");
    });

    it("Should be able to filter by Rating Lowest", async () => {
        await productPage.sort.waitForClickable();
        await productPage.sort.selectByVisibleText("Rating Lowest");
        await expect(
            productPage.sort.$('option[value="rating-ASC"]')
        ).toHaveAttribute("selected", "true");
    });

    it("Should be able to filter by Date New > Old", async () => {
        await productPage.sort.waitForClickable();
        await productPage.sort.selectByVisibleText("Date New > Old");
        await expect(
            productPage.sort.$('option[value="date_modified-DESC"]')
        ).toHaveAttribute("selected", "true");
    });
});
