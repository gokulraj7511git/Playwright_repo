import {test,expect} from '@playwright/test'
import logincred from '../utils/logincred.json' assert { type: 'json' }

test.beforeEach(async({page})=>{ 
     await page.goto('https://www.demoblaze.com/index.html') 
})
for (const data of logincred){ 
test(`Loginn using valid and invalid Cred ${data.Username} ${data.Password}`, async ({page})=>
{

const signupclick = page.locator('//a[@data-target="#logInModal"]').click()
const username = page.locator("//input[@id='loginusername']")
const password = page.locator("//input[@id='loginpassword']")
const loginbutton = page.locator("//button[@onclick='logIn()']")

await username.fill(data.Username)
await password.fill(data.Password)
await loginbutton.click()
  


})
}