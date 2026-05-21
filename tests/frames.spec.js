import {test,expect} from '@playwright/test'
test.only('Frames', async ({page})=>{
await page.goto('https://demoqa.com/frames')

const sampleframe=page.frameLocator("#frame1")
console.log(await sampleframe.locator("#sampleHeading").textContent())
})