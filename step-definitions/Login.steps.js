import { Given,When,Then, setDefaultTimeout } from '@cucumber/cucumber' //importing the necessary functions from cucumber
// set default timeout used to  incrse cucumber waiting time.
setDefaultTimeout(60 * 1000) // setting the default timeout for Cucumber steps to 60 seconds (60000 milliseconds). This means that if any step takes longer than this time to execute, it will be considered a failure. This is useful to prevent tests from hanging indefinitely and to allow for slower operations or network delays during test execution.
import { chromium } from 'playwright' // used to import chorimium browser functionality.
import assert  from 'assert' // used to import assertion library for validating test results.

let browser // variable to store the browser instance
let page  // variable to store the page instance 
// browser and page are declared outside the funtion to make them accessable throughout the step defnition file.

Given('User is on the login page', async function () {
  browser = await chromium.launch({headless: false}) // launching the browser in non-headless mode to see the browser actions during test execution.

// launch browser in visible mode and store into a browser veriable for further automation actions
// false - browser is visible. true browser hidden

  const context = await browser.newContext() // creating a new browser context, which is an isolated environment for the browser session. This allows us to have multiple independent sessions if needed.
   page = await context.newPage() // creating a new page within the browser context and storing it in the page variable for further interactions with the web page.
   await page.goto('https://www.saucedemo.com/')   
})

When('User enters valid username and valid password', async function () {
  await page.fill('#user-name', 'standard_user') // filling the username input field with the value 'standard_user' using the CSS selector '#user-name'.
  await page.fill('#password', 'secret_sauce') // filling the password input field with the value 'secret_sauce' using the CSS selector '#password'.
})

When('User enters valid username {string} and invalid password {string}', async function (username, password) {
  await page.fill('#user-name', username) 
  await page.fill('#password', password) 
})

When('Click on the login button', async function () {
  await page.click('#login-button') 
})

Then ('User should navigate to the home page', async function () {
  const title = await page.title() 
  assert.ok(title.includes('Swag Labs')) // checks whether specified text is present or not.
  await browser.close()
})

Then ('User should see an error message', async function () {
  const error=await page.locator("//h3[@data-test='error']").textContent()
  assert.ok (error.includes('Epic sadface: Username and password do not match any user in this service')) // checks whether specified text is present or not.
  await browser.close()
})