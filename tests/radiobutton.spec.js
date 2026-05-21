import {test,expect} from '@playwright/test'
test.only('Radio Button Test', async({page})=>
{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const radiogreen=page.locator("//input[@value='green']")
// await radiogreen.click() // select method 1
await radiogreen.check()
const status=await radiogreen.isChecked() // Is chek method is used to verify whether a radio button is seleted or not
console.log(status)
})