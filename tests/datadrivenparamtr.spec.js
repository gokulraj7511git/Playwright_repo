import {test,expect} from '@playwright/test'
import dataset from '../utils/parameterizedtestdata.json' assert { type: 'json' }

test.beforeEach(async({page})=>{
     await page.goto('https://www.saucedemo.com/')
})
for(const data of dataset){
test(`Login using valid and invalid Cred ${data.username} ${data.password}`, async ({page})=>
{
const user = page.locator("//input[@placeholder='Username']")
await user.fill(data.username)

const pass = page.locator("//input[@placeholder='Password']")
await pass.fill(data.password)

const uslogin = page.locator("//input[@id='login-button']")
await uslogin.click()

})
}