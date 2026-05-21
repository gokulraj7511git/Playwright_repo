import {test,expect} from '@playwright/test'
test ('Dropdown Handling', async ({page})=>{
await page.goto ('https://selenium.qabible.in/select-input.php')
const dropdown = page.locator("//select[@id='single-input-field']")
//await dropdown.selectOption({label:'Yellow'}) // use when visible text

// await dropdown.selectOption({value:'Green'}) // select by value

await dropdown.selectOption({index:2}) // select by index
}) 