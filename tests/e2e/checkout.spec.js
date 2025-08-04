import { test, expect } from '@playwright/test';

test('complete checkout', async ({ page }) => {

    // initial page
    await page.goto('https://www.saucedemo.com/');

    // login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // add item to the cart
    await page.click('button[id="add-to-cart-sauce-labs-backpack"]');

    // go to cart
    await page.click('.shopping_cart_link');

    // checkout
    await page.click('#checkout');

    // fill checkout
    await page.fill('#first-name', 'Rafaela');
    await page.fill('#last-name', 'Piellusch');
    await page.fill('#postal-code', '12345');

    // continue and finish
    await page.click('#continue');
    await page.click('#finish');

    // validation of message
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});