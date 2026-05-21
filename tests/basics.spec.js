import {test,expect} from '@playwright/test' // official test runner of playwright
test('Browser Context Playwright Test', async({browser})=>{ // test denots testcase. 
// Browser context ... is test name. browser is fixture represent actual browser
    const context=await browser.newContext()  // create a new browser session
    const page=await context.newPage()  // create a new tab inside that session
    await page.goto('https://selenium.qabible.in/')  // goto used to launch url

}) /* 1. Browswer start 2. session create 3. trab create 4 . launch website */

test.only('Page Playwright Test', async({page}) =>
{
 await page.goto('https://selenium.qabible.in/')  
 const title = await page.title()
 console.log(title)
 await expect(page).toHaveTitle("Obsqura Testingg")
})

