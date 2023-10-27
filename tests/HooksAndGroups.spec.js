import { test, expect } from '@playwright/test'
import { describe } from 'node:test';


test.describe('All my tests', ()=> {


test.beforeEach(async({page}) => {

    await page.goto('https://www.saucedemo.com/')

    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html')

})

test.afterAll(async({page}) => {

    await page.close();
})


test('homepage', async ({ page }) => {


    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('#item_1_title_link').click();
    await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=1');
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

})


test('logout', async ({ page }) => {


    await page.locator('div').filter({ hasText: /^Swag Labs$/ }).first().click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

})

})