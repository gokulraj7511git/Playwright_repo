export class Checkoutdetails
{
constructor(page){
    this.page=page
    this.firstname=page.locator('//input[@name="firstName"]')
    this.lastname=page.locator('//input[@name="lastName"]')
    this.zipcode=page.locator('//input[@name="postalCode"]')
    this.continue=page.locator('//input[@data-test="continue"]')
}
async goto()
{
     await this.page.goto('https://www.saucedemo.com/checkout-step-one.html') 
}
async adddetails(first,last,zip)
{
     await this.firstname.fill(first) 
     await this.lastname.fill(last)
     await this.zipcode.fill(zip)
     await this.continue.click()
}}