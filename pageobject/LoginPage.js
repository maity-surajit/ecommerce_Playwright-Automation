class LoginPage {

    constructor(page)
    {
        this.page = page;
        this.username = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.login = page.locator("[value='Login']");
        this.cardBody = page.locator(".card-body b");
    }

   async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogIn(username, password) 
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();
        await this.cardBody.first().waitFor();
    }
}

module.exports = {LoginPage};




    // await page.goto("https://rahulshettyacademy.com/client");
    // await page.locator('#userEmail').fill('testdemo@mailinator.com');
    // await page.locator('#userPassword').fill('Asdfasdf12');
    // await page.locator("[value='Login']").click();
