import {test, expect} from '@playwright/test'

test ('selectors demo', async ({page}) => {

await page.goto('https://www.saucedemo.com/')
//await page.pause()

//using any object property
await page.click('id=user-name')
await page.locator('id=user-name').fill('standard_user')
await page.locator('[id="user-name"]').fill('Einstein')

//using CSS selector
//#login-button
await page.locator('#login-button').click()
//using xpath
await page.locator('xpath=//input[@name="password"]').fill('Faraday')
await page.locator('//input[@name="password"]').fill('eam')


}
)