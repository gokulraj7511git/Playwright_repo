export class ProductPage 
{
constructor(page){
    this.page=page
    this.product1=page.locator('//button[@data-test="add-to-cart-sauce-labs-backpack"]')
    this.product2=page.locator('//button[@data-test="add-to-cart-sauce-labs-bike-light"]')
    this.kart=page.locator('//a[@class="shopping_cart_link"]')  
  
}           
async goto()
{
     await this.page.goto('https://www.saucedemo.com/inventory.html')
     
}
async addproduct()
{
     await this.product1.click()
     await this.product2.click()
     await this.kart.click()
  
}
}
