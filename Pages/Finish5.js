export class Finish
{
constructor(page){  
    this.page=page
    this.finish=page.locator('//button[@data-test="finish"]')
}
async goto()
{
     await this.page.goto('https://www.saucedemo.com/checkout-step-two.html')       
}
async finishcheckout()
{
     await this.finish.click()    
}}
