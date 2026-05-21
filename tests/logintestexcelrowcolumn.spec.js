import {getCellData} from '../utils/excelreader2'
import {test,expect} from '@playwright/test'
test ('Login with Excel Data Row Column', async ({page}) => {

    const username=getCellData(2,1)  // row and column based data fetch from excel sheet.
    const password=getCellData(2,2)

    await page.goto('https://www.saucedemo.com/')

    const usernamee=page.locator('//input[@placeholder="Username"]')
    const passwordee=page.locator('//input[@placeholder="Password"]')
    const loginbtn=page.locator('//input[@class="submit-button btn_action"]')

    await usernamee.fill(username)
    await passwordee.fill(password) 
    await loginbtn.click()


})