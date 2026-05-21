import {test,expect} from '@playwright/test'
test ('Hyreo login page test', async ({page})=>
{
await page.goto ('https://crm-stg.hyreo.com/creative/')

const chatInput=page.locator("//textarea[@placeholder='Type your message..']")
await chatInput.fill('gokul@hyreo.com')
await page.locator('button:has(svg.icon-fill)').click()

await expect(chatInput).toBeEditable()

await chatInput.fill('011235')
await page.locator('button:has(svg.icon-fill)').click()
await chatInput.waitFor({ state: 'visible' })

await page.locator("//button[@class='btn-chatbot primary-color']").click()






/* await page.locator("//div[contains(@class,'chat-close')]").click()
await page.getByRole('button', { name: 'Recruiter Login' }).click()
await page.goto('https://auth-uat.hyreo.com/realms/csg-crm-uat/protocol/openid-connect/auth?client_id=hyreo-crm-ui&redirect_uri=https%3A%2F%2Fcrm-stg.hyreo.com%2Fcreative%2Fhome&state=9d896d4f-9e25-4f7f-9464-a5f87a7636fd&response_mode=query&response_type=code&scope=openid&nonce=731e4dd8-9f6c-4f9f-876f-ff98081aa283')
 */
/* await page.getByRole('textbox', { name: 'username' }).fill('harikrishnan@hyreo.com')
await page.getByRole('textbox', { name: 'password' }).fill('harikrishnan@hyreo.com')
await page.locator("//input[@name='login']").click()
await page.goto('https://crm-stg.hyreo.com/creative/dashboard') */

})


