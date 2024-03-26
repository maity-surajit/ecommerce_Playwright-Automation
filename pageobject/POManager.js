const {LoginPage} = require('../pageobject/LoginPage');
const {DashboardPage} = require('../pageobject/DashboardPage');
const {CheckoutPage} = require('../pageobject/CheckoutPage');
const {PaymentmethodPage} = require('../pageobject/PaymentmethodPage');
const {PlaceorderPage} = require('../pageobject/PlaceorderPage');

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.paymentPage = new PaymentmethodPage(this.page);
        this.placeorderPage = new PlaceorderPage(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getDashboardPage()
    {
        return this.dashboardPage;
    }

    getCheckoutPage()
    {
        return this.checkoutPage;
    }

    getPaymentmethodPage()
    {
        return this.paymentPage;
    }

    getplaceorderPage()
    {
        return this.placeorderPage;
    }

}

module.exports = {POManager};