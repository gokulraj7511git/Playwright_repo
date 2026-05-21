import {test,expect} from '@playwright/test'
test ('Confirmation Alert Handling', async ({page})=>{
await page.goto ('https://selenium.qabible.in/javascript-alert.php')

page.on('dialog',async dialog => {

    expect(dialog.message()).toBe('Press a button!')

//await dialog.accept()    
await dialog.dismiss()
 })
const alert = page.locator("//button[@onclick='jsConfirm()']")
await alert.click()

})