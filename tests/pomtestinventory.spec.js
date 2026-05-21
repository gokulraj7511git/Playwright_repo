import {LoginPage} from '../Pages/LoginPage1'
import {ProductPage} from '../Pages/ProductPageInventory2'
import {Kart} from '../Pages/Kart3'
import {Checkoutdetails} from '../Pages/DetailsForChkout4'
import {Finish} from '../Pages/Finish5'

import {test,expect} from '@playwright/test'

test ('POM Login and checkout test', async ({page}) => {

const loginpage=new LoginPage(page) 
await loginpage.goto()
await loginpage.login('standard_user' , 'secret_sauce')
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

const productpage=new ProductPage(page)
await productpage.goto()  
await productpage.addproduct()  
await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    
const kart=new Kart(page)
await kart.goto()
await kart.checkoutkart()
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
    
const details=new Checkoutdetails (page)   
await details.goto()
await details.adddetails('Gokul', 'Raj', '691306')
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')    

const finish=new Finish(page)
await finish.goto()
await finish.finishcheckout()   
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')

const cnfmmsg = page.locator('//h2[@class="complete-header"]')
const alertmessage = await cnfmmsg.textContent()
console.log(alertmessage)
})
 