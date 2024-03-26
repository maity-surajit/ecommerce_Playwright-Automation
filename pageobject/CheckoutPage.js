const { expect } = require("@playwright/test");

class CheckoutPage
{
    constructor(page)
    {
        this.page = page;
        this.itemName = page.locator(".cartSection h3");
        this.checkoutBtn = page.locator('.subtotal .btn-primary');
    }


    async verifyItemPresent(productName)
    {
        await expect(this.itemName).toHaveText(productName);
        console.log("Running verifyItemPresent: " + await this.itemName.textContent());
    }

   async clickOnCheckout()
   {
    await this.checkoutBtn.click();
   }
    
}

module.exports = {CheckoutPage};