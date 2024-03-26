class DashboardPage {

    constructor(page)
    {
        this.page = page;
        this.cart = page.locator("[routerlink='/dashboard/cart']");
        this.products = page.locator(".card-body");
        this.productText = page.locator(".card-body b");
    }

   async searchProduct(productName)
    {
        const count = await this.products.count();
        for(let i=0; i<=count; i++)
        {
            //const item = await this.products.nth(i).textContent();
           // console.log(item);
            if(await this.productText.nth(i).textContent() === productName) {
                await this.products.nth(i).locator("[class='btn w-10 rounded']").click();
                break;
            }
            
        }
    }

    async navigateToCart()
    {
        await this.cart.waitFor();
        await this.cart.click();
    }
}

module.exports = {DashboardPage};

