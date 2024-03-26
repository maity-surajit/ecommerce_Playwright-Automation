class PaymentmethodPage
{
    constructor(page)
    {
        this.page = page;
        this.selectCountry = page.locator("[placeholder='Select Country']");
        this.resultText = page.locator(".ta-results button");
        this.placeOrder = page.locator(".action__submit");
    }



    async chooseCountry(countryName)
    {
        await this.selectCountry.waitFor();
        await this.selectCountry.type(countryName, {delay:100});
    
        await this.selectCountry.last().waitFor();
        const countryCount = await this.selectCountry.count();

        console.log("list of country name: " + countryCount);

        for(let i=0; i<= countryCount; i++) {
            const country = await this.page.locator(".ta-results button").nth(i).textContent();
            console.log(country);

            if(await this.page.locator(".ta-results button").nth(i).textContent() === " India")
            {
                await this.page.locator(".ta-results button").nth(i).click();
                break;
            }
            
        } 
    }

     async placeAnOrder()
     {
        await this.placeOrder.click();
     }

    
}

module.exports={PaymentmethodPage}