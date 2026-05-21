import {test,expect} from '@playwright/test'
test.only('Special Locators', async({page})=>
{
await page.goto('https://groceryapp.uniqassosiates.com/admin')
const username = page.locator("//input[@name='username']")
await username.fill('admin')
const password = page.locator("//input[@name='password']")
await password.fill('admin')
const signin= page.locator("//button[@type='submit']")
await signin.click()
await page.goto('https://groceryapp.uniqassosiates.com/admin/list-admin')
//await page.getByRole('button',{name:'Active'}).nth(5).click()
//await page.getByText('Active').nth(5).click()  // syntax:  page getByText('Text')
//await page.getByText('Active').first().click() 
await page.getByText('Active').last().click() 
})

//  page getByText('Text')

/* getByRole syntax - page.getByRole(role,{name:'text'}) 
button= role of Element
active = visible text or accessable name */