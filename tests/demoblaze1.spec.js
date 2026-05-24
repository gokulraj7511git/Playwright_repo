import {test,expect} from '@playwright/test'
test ('Demo Blazer Test', async ({page})=> {
    await page.goto('https://www.demoblaze.com/index.html')

         const pagesignup = page.locator("//a[@data-target='#signInModal']").click()
         const username = page.locator("//input[@id='sign-username']")
         await username.fill('GokulRaj013')
         const password = page.locator("//input[@id='sign-password']")
         await password.fill('Gokulraj113')
         const signupbutton = page.locator("//button[@onclick='register()']")
         await signupbutton.click()

page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Sign up successfull.')
    await dialog.accept()
  })

})
