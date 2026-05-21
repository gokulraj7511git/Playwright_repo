import {test, expect} from '@playwright/test'
test.only ('Multiple Window Test case', async ({page,context})=>{
await page.goto('https://demo.guru99.com/popup.php')
const popup=context.waitForEvent('page')   // wait until new tab load, locate and click action perform nu munne kodukkanam
const clickhere= page.locator ("//a[text()='Click Here']") 
await clickhere.click()
const newpopup = await popup
await newpopup.waitForLoadState()
const email = newpopup.locator("//input[@name='emailid']")
await email.fill('sample@gmail.com')
const submit = newpopup.locator("//input[@name='btnLogin']")
await submit.click()


})
