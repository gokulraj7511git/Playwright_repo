import { ProductPage } from "./ProductPageInventory2"

export class LoginPage    // used to import all elements in test class
{     
constructor(page){

    this.page=page
    this.username=page.locator('//input[@placeholder="Username"]')
    this.password=page.locator('//input[@placeholder="Password"]')
    this.loginbtn=page.locator('//input[@class="submit-button btn_action"]')

}
async goto()
{
     await this.page.goto('https://www.saucedemo.com/') 
     return this   //chaining of pages/methods to navigate to next page after login
}

async login(user,pass)
{                                       
     await this.username.fill(user)
     await this.password.fill(pass)
     await this.loginbtn.click()
     return new ProductPage(this.page)   // to navigate to next page after login   chaining of pages/methods  
   
}
}