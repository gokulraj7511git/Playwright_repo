import {test,expect} from '@playwright/test'
test ('Prompt Alert Handling', async ({page})=>{
await page.goto ('https://selenium.qabible.in/javascript-alert.php')

page.on('dialog',async dialog => {

    expect(dialog.message()).toBe('Please enter your name')

await dialog.accept('Gokul')    
//await dialog.dismiss()
 })
const alert = page.locator("//button[@onclick='jsPrompt()']")
await alert.click()

})