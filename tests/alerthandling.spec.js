import {test,expect} from '@playwright/test'
test ('Simple Alert Handling', async ({page})=>{
await page.goto ('https://selenium.qabible.in/javascript-alert.php')

page.on('dialog',async dialog => {

    expect(dialog.message()).toBe('I am a Javascript alert box!')

await dialog.accept()    

 })
const alert = page.locator("//button[@onclick='jsAlert()']")
await alert.click()

})