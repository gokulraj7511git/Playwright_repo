import {test,expect} from '@playwright/test'

test ('End to end testing', async ({page})=>
{
await page.goto ('https://www.saucedemo.com/')

const user = page.locator("//input[@placeholder='Username']")
await user.fill('standard_user')

const pass = page.locator("//input[@placeholder='Password']")
await pass.fill('secret_sauce')

const uslogin = page.locator("//input[@id='login-button']")
await uslogin.click()

const addcart = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")
await addcart.click()

const cartclick =page.locator('//a[@data-test="shopping-cart-link"]')
await cartclick.click()

const checkout= page.locator('//button[@data-test="checkout"]')
await checkout.click()

const userdata1 = page.locator('//input[@data-test="firstName"]')
await userdata1.fill('Gokul')

const userdata2 = page.locator('//input[@id="last-name"]')
await userdata2.fill('R')

const userdata3 = page.locator('//input[@data-test="postalCode"]')
await userdata3.fill('00000')

const continuee = page.locator('//input[@data-test="continue"]')
await continuee.click()

const finish = page.locator('//button[@data-test="finish"]')
await finish.click()

/* const finalmsg = page.locator('//h2[@class="complete-header"]')
await expect(finalmsg).toHaveText('Thank you for your order!')
const text = await finalmsg.textContent();
console.log(text); */

await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')

await expect (page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
const currentUrl = page.url()
console.log(currentUrl)

})
