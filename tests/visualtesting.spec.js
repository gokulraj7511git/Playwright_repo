import {test,expect} from '@playwright/test'
test ('Visual Testing In Playwright', async ({page})=>{
     await page.goto ('https://www.saucedemo.com/')
     await page.waitForLoadState('networkidle')
     await expect(page).toHaveScreenshot('loginpage.png',{threshold:0.2,maxDiffPixels:7000})
})