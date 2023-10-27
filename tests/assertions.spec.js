import test, {page, expect} from '@playwright/test'

test ('Assertions Demo', async({page}) => {

await page.goto('https://kitchen.applitools.com/')
await page.pause()

//assertions
//check element present or not

await expect(page.locator('text= The Kitchen')).toHaveCount(1)

if (await page.$('text=The Kitchen'))
{
    await page.locator('text=The Kitchen').click()
}

//check element hidden or visible
await expect(page.locator('text=The kitchen')).toBeVisible()
await expect(page.locator('text=The kitchen')).toBeHidden()

//check element enabled or disabled
await expect(page.locator('text=The kitchen')).toBeEnabled()
await expect(page.locator('text=The kitchen')).toBeDisabled()

//check text
await expect(page.locator('text=The kitchen')).toHaveText()
await expect(page.locator('text=The kitchen')).not.toHaveText()

//check attribute alue
await expect(page.locator('text=The kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
await expect(page.locator('text=The kitchen')).toHaveCSS(/.*css-dpmy2a/)

//check page url and title
await expect(page).toHaveURL('https://kitchen.applitools.com')
await expect(page).toHaveTitle('The kitchen')

//visual validation with screenshot
await expect(page).toHaveScreenshot()
})