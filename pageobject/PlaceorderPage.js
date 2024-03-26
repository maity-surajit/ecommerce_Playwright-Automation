const {expect} = require('@playwright/test');

class PlaceorderPage
{
    constructor(page)
    {
        this.page = page;
        this.orderId = page.locator(".ng-star-inserted .em-spacer-1 .ng-star-inserted");
        this.orderConfirmationText = page.locator("h1");
    }

    async verifyOrderPlacePage()
    {
        await this.orderId.waitFor();
        const orderConfirmation = await this.orderConfirmationText.textContent();
        console.log(orderConfirmation);
        await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
        const orderId = await this.orderId.textContent();
        console.log(orderId);
    }
}

module.exports={PlaceorderPage};