// postive Test using POM
import {test, expect} from '@playwright/test'
import SaucedemoPage from '../pages/saucedemoPage';

test.describe ('login Test', () => {

    test('login with valid details', async function ({page}) {
        const saucePage = new SaucedemoPage(page);
    await page.goto ('/')
    await saucePage.login ('standard_user', 'secret_sauce');
    await expect (page).toHaveURL('/inventory.html');
    });

//Negative Test
test('Negative login page with invalid password', async function ({page}) {
    const saucePage = new SaucedemoPage(page);
    await page.goto ('/')
    await saucePage.login ('standard_user', 'Wrong123')
    await expect (saucePage.errorMessage).toBeVisible();
})
    //close error message
    test.only('dismissError', async ({page}) => {
        const saucePage = new SaucedemoPage (page);
        await page.goto ('/')
        await saucePage.login ('standard_user', 'Wrong123')
        await expect (saucePage.errorMessage).toBeVisible();
   await expect (saucePage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
  await saucePage.dismissError()
   await expect (saucePage.errorMessage).not.toBeVisible();
})

test('Login with balnk password field', async ({page}) => {
    const saucePage = new SaucedemoPage(page)
    await page.goto ('/')
    await saucePage.login ('standard_user', '')
    await expect (saucePage.passwordErrorMessage).toHaveText ('Epic sadface: Password is required')
})
});