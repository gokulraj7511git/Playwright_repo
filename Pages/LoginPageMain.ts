import { ProductPage } from "./ProductPageInventory2"
import {Page,Locator} from '@playwright/test'     // to import type.

export class LoginPage    // used to import all elements in test class
{     

    page:Page
    username:Locator
    password:Locator
    loginbtn:Locator

constructor(page:Page){

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

async login(user: string, pass: string)
{                                       
     await this.username.fill(user)
     await this.password.fill(pass)
     await this.loginbtn.click()
     return new ProductPage(this.page)   // to navigate to next page after login   chaining of pages/methods  
   
}
}