const {test, expect} = require('@playwright/test');
const {POManager} = require('../pageobject/POManager');

//JSON -> String -> jsobject
const dataset = JSON.parse(JSON.stringify(require('../utils/endToendTestData.json')));

for(const data of dataset)
{

    test(`Valid login and creating order for ${data.productName}`, async ({page}) => {

        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogIn(data.username,data.password);

        const dashboardPage = poManager.getDashboardPage();
        
        await dashboardPage.searchProduct(data.productName);
        await dashboardPage.navigateToCart();

        const checkoutPage = poManager.getCheckoutPage();
        await checkoutPage.verifyItemPresent(data.productName);
        await checkoutPage.clickOnCheckout();

        const paymentPage = poManager.getPaymentmethodPage();
        await paymentPage.chooseCountry(data.countryName);
        await paymentPage.placeAnOrder();

        const placeorderPage = poManager.getplaceorderPage();
        await placeorderPage.verifyOrderPlacePage();
        
    })

}