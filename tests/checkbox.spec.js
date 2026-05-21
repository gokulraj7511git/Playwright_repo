import {test,expect} from '@playwright/test'
test.only('Checkboxes in Playwright', async({page})=>
{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
 /* const checkbox=page.locator("//input[@value='option-1']") */
/*await checkbox.click() */
/* await checkbox.check() */
 const checkbox=page.locator("//input[@value='option-3']")
 //await checkbox.check()
 await checkbox.uncheck()
 const status=await checkbox.isChecked() // Is chek method is used to verify whether a radio button is seleted or not
console.log(status)
/*await checkbox.click() // click function alredy clicked will uncheck */
})