import {test,expect} from '@playwright/test'
test.beforeEach(async({page})=>{

await page.goto('https://www.saucedemo.com/')
})
test('@smoke Login using valid Cred', async ({page})=>
{

const user = page.locator("//input[@placeholder='Username']")
await user.fill('standard_user')
const pass = page.locator("//input[@placeholder='Password']")
await pass.fill('secret_sauce') 
const uslogin = page.locator("//input[@id='login-button']")
await uslogin.click()

const title = await page.title()
console.log(title)
//await expect (page).toHaveTitle("Swag Labs")
await expect (page).toHaveURL("https://www.saucedemo.com/inventory.html")

} )

/***************************************************************/
test('@smoke Login using invalid User name', async ({page})=>
{

const user = page.locator("//input[@placeholder='Username']")
await user.fill('standard_user01')

const pass = page.locator("//input[@placeholder='Password']")
await pass.fill('secret_sauce')

const uslogin = page.locator("//input[@id='login-button']")
await uslogin.click()

await expect (page).toHaveURL("https://www.saucedemo.com/")

} )
/***************************************************************/

test('Login using invalid Password', async ({page})=>
{
const user = page.locator("//input[@placeholder='Username']")
await user.fill('standard_user')

const pass = page.locator("//input[@placeholder='Password']")
await pass.fill('sssecret_sauce')

const uslogin = page.locator("//input[@id='login-button']")
await uslogin.click()

await expect (page).toHaveURL("https://www.saucedemo.com/")

} )