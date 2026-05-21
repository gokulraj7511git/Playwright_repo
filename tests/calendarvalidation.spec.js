import {test,expect} from '@playwright/test'
test ('Calendar Validation', async ({page}) => {

 await page.goto('https://selenium.qabible.in/date-picker.php')
    const calender = page.locator('#single-input-field')
    await calender.click() 

    const targetYear = 1997
    await expect(page.locator('.dropdown-menu ')).toBeVisible // watit until calender popup element is visible on the page, and verify that it is visible on the page.and verify that it is displayed.
    const calenderswitch = page.locator('.datepicker-switch:visible') // :visible - visible is used to filter and select only visible element.
    await calenderswitch.click() 
    await calenderswitch.click()
    let attempts = 5 // this will allow max 5 attempts.
    while (attempts --) {
        const decades=await calenderswitch.innerText() // get the text visible on the screen.
        const startYear=parseInt(decades.split('-')[0].trim()) // split the decade text and get the start year and convert it to integer.
    if (targetYear >= startYear && targetYear <= startYear + 9)
        break
     await page.locator('.prev:visible').click() // is used to select only the visible element.
    }
await page.locator('.year:visible').filter({hasText:'1997'}).click()
await page.locator('.month:visible').filter({hasText:'Aug'}).click()
await page.locator('.day:visible').filter({hasText:'15'}).click()
await page.locator ('#button-one').click()
}
)