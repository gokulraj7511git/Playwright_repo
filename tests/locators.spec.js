import {test,expect} from '@playwright/test'
test.only('Page locator Test', async ({page})=>
{
await page.goto ('https://selenium.qabible.in/simple-form-demo.php')
const messagebox = page.locator('#single-input-field')
/* const secondmessagebox  = page.locator('.form-control')
const gettotal = page.locator ("//button[@id='button-two']")  // xpath
const gettotalbutton = page.locator("//button[text()='Get Total']") */
const showmessage = page.locator('#button-one')
await messagebox.fill("Gokul")
await showmessage.click()
})


