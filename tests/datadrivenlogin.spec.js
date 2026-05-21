import {test,expect} from '@playwright/test'
import validcredentials from '../utils/testcredentials.json' assert { type: 'json' }
test('Data Driven Login', async ({page})=> {

await page.goto('https://www.saucedemo.com/')
    const usernamevalue=validcredentials.username
    const passwordvalue=validcredentials.password
const user = page.locator("//input[@placeholder='Username']")
await user.fill(usernamevalue)

const pass = page.locator("//input[@placeholder='Password']")
await pass.fill(passwordvalue)

const uslogin = page.locator("//input[@id='login-button']")
await uslogin.click()

const title = await page.title()
console.log(title)
//await expect (page).toHaveTitle("Swag Labs")
await expect (page).toHaveURL("https://www.saucedemo.com/inventory.html")
})