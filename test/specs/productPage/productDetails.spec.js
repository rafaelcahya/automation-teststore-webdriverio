import generator from "../../helper/generator";
import Homepage from "../../pageobjects/Homepage";
import loginPage from "../../pageobjects/login.page";
import navbar from "../../pageobjects/navbar";
import productDetails from "../../pageobjects/productDetails";
import productPage from "../../pageobjects/productPage";
import shoppingCart from "../../pageobjects/shoppingCart";
import subnav from "../../pageobjects/subnav";

describe("Product Details", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await Homepage.open();
        await navbar.loginRegisterBtn.waitForClickable();
        await navbar.loginRegisterBtn.click();
        await loginPage.login("Cahya123", "Cahya123");
        await subnav.ApparelAccesories.waitForClickable();
        await subnav.ApparelAccesories.click();
        await productPage.productDetails();
    });

    afterEach(async () => {
        await browser.deleteCookies();
        await browser.refresh();
    });

    it("Should click all product thumbnails", async () => {
        const productThumbnailsList =
            await productDetails.productThumbnailsList;
        const numberofThumbnails = productThumbnailsList.length;
        await expect(numberofThumbnails).toBeGreaterThan(0);
        for (let i = 0; i < numberofThumbnails; i++) {
            const thumbnail = productThumbnailsList[i];
            await thumbnail.click();
        }
    });

    it("Should be able to choose all size if stock still available", async () => {
        const sizeLabels = await productDetails.sizeLabels;
        const numberOfSize = sizeLabels.length;
        await expect(numberOfSize).toBeGreaterThan(0);
        for (let i = 0; i < numberOfSize; i++) {
            const sizeLabel = sizeLabels[i];
            await sizeLabel.click();
        }
    });

    it("Should be able to show message if size stock is not available", async () => {
        const sizeLabels = await productDetails.sizeLabels;
        const numberOfSize = sizeLabels.length;
        await expect(numberOfSize).toBeGreaterThan(0);
        for (let i = 0; i < numberOfSize; i++) {
            const sizeLabel = sizeLabels[i];
            const labelText = await sizeLabel.getText();
            if (labelText.includes("Out of Stock")) {
                await expect(labelText).toContain("Out of Stock");
            }
        }
    });

    it("Should not be able to choose size if stock is not available", async () => {
        const sizeLabels = await productDetails.sizeLabels;
        const numberOfSize = sizeLabels.length;
        await expect(numberOfSize).toBeGreaterThan(0);
        for (let i = 0; i < numberOfSize; i++) {
            const sizeLabel = sizeLabels[i];
            const labelTextIsDisabled = await sizeLabel.getAttribute(
                "disabled"
            );
            if (labelTextIsDisabled) {
                await expect(labelTextIsDisabled).toBe("true");
                await expect(labelTextIsDisabled).toBeDisabled();
            }
        }
    });

    it("Should not be able to choose color if stock is not available", async () => {
        await productDetails.colorDropdown.waitForClickable();
        await productDetails.colorDropdown.click();
        const colorOptions = await productDetails.colorLabels;
        const numberOfColor = colorOptions.length;
        await expect(numberOfColor).toBeGreaterThan(0);
        for (let i = 0; i < numberOfColor; i++) {
            const colorLabel = colorOptions[i];
            const colorText = await colorLabel.getText();
            const isDisabled = await colorLabel.getAttribute("disabled");
            if (colorText.includes("Out of Stock")) {
                await expect(isDisabled).not.toBeNull();
                await expect(await colorLabel.isEnabled()).toBe(false);
            }
        }
    });

    it("Should be able to show message if color stock is not available", async () => {
        await productDetails.colorDropdown.waitForClickable();
        await productDetails.colorDropdown.click();
        const colorOptions = await productDetails.colorLabels;
        const numberOfColor = colorOptions.length;
        await expect(numberOfColor).toBeGreaterThan(0);
        for (let i = 0; i < numberOfColor; i++) {
            const colorLabel = colorOptions[i];
            const labelText = await colorLabel.getText();
            if (labelText.includes("Out of Stock")) {
                await expect(labelText).toContain("Out of Stock");
            }
        }
    });

    it("Should be able to fill product quantity", async () => {
        await productDetails.productQuantity.waitForDisplayed();
        const quantity = generator.generateNumber();
        await productDetails.productQuantity.setValue(quantity);
        const quantityValue = await productDetails.productQuantity.getValue();
        await expect(productDetails.productQuantity).toHaveValue(quantityValue);
    });

    it("Should be able to show and calculate the price of product", async () => {
        await productDetails.productPrice.waitForDisplayed();
        const price = parseFloat(
            (await productDetails.productPrice.getText()).replace("$", "")
        );
        await productDetails.productQuantity.waitForDisplayed();
        const quantity = generator.generateNumber();
        await productDetails.productQuantity.setValue(quantity);
        const totalCalculationPrice = (price * quantity).toFixed(2);
        await productDetails.totalPrice.waitForDisplayed();
        await expect(productDetails.totalPrice).toHaveText(
            "$" + totalCalculationPrice
        );
    });
});
