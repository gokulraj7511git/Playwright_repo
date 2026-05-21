export class Kart
{
constructor(page){  
    this.page=page
    this.checkout=page.locator('//button[@class="btn btn_action btn_medium checkout_button "]')

}
async goto()
{
     await this.page.goto('https://www.saucedemo.com/cart.html')

}
async checkoutkart()
{
     await this.checkout.click()    
}}