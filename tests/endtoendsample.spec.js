import {test,expect} from '@playwright/test'
test ('End to end flow', async ({page}) => {

 await page.goto('https://groceryapp.uniqassosiates.com/admin/login')

 const username = page.locator('//input[@placeholder="Username"]')
 const password = page.locator('//input[@placeholder="Password"]')
 const signin = page.locator('//button[@class="btn btn-dark btn-block"]')

 await username.fill('admin')
 await password.fill('admin')
 await signin.click()

 const managecontact = page.getByRole('link', { name: 'Manage Contact' })
 const editbutton = page.locator('//a[@class="btn btn-sm btn btn-primary btncss"]')

 await managecontact.click()
 await editbutton.click()

 const phone = page.locator('//input[@name="phone"]')
 const email = page.locator('//input[@name="email"]')
 const address = page.locator('//textarea[@placeholder="Enter the Address"]')
 const deliverytime = page.locator('//textarea[@placeholder="Enter Delivery Time"]')
 const dlvrychrg = page.locator('//input[@name="del_limit"]')
 const updatebutton = page.locator('//button[@class="btn btn-block-sm btn-info"]')

 await phone.fill('8921538939')
 await email.fill('gokulhyreo@gmail.com')
 await address.fill('Temp Address TVM')
 await deliverytime.fill('10:00 AM - 6:00 PM')
 await dlvrychrg.fill('450')
 await updatebutton.click()

 const successalert = page.locator('//div[@class="alert alert-success alert-dismissible"]')
 const alertmessage = await successalert.textContent()
 console.log(alertmessage)

 await expect(successalert).toContainText('Contact Updated Successfully')

/*  await expect(page).toHaveTitle("Contact Us | 7rmart supermarket")
 const title = await page.title()
 console.log(title)

 await expect(page).toHaveURL("https://groceryapp.uniqassosiates.com/admin/list-contact")
 const url = await page.url()
 console.log(url) */

 /* await expect (page.locator("//div[@class='alert alert-success alert-dismissible']")).toBeVisible */

})