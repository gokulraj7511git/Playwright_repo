import {getData} from '../utils/excelreader'

import { LoginPage } from '../Pages/LoginPage1'

import {test,expect} from '@playwright/test'

const credentials = getData()
test ('POM Login Test', async ({page}) => {
for(const data of credentials)
{
const loginpage=new LoginPage(page) 
await loginpage.goto()
await loginpage.login(data.username, data.password)
/* const ProductPage= await (await loginpage.goto()).login('standard_user','secret_sauce')  // chaining of pages/methods */
//await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
}

})

