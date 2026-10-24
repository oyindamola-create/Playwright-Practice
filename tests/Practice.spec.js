import {test, expect} from '@playwright/test'
test.describe ('Practice Test',  () => {
test.beforeEach (async ({page}) => {
    await page.goto('/AutomationPractice/')
})

test ('Select single radio button', async ({page}) => {
    await page. getByRole ('radio').nth(2).click();
    //await page.getByRole ('radio').first().click()
    //await page.getByRole ('radio').last().click()
    })

test('select random radio button', async ({page}) => {
    function returnRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const no = returnRandomNumber(0, 2)
 await page.getByRole ('radio').nth(no).click()
})


test ('dropdown test', async ({page}) => {
    const dropdown = await page.locator('#dropdown-class-example');
    await dropdown.selectOption('option2')
    await expect (dropdown).toHaveValue ('option2')
    // await page.locator('#dropdown-class-example').selectOption ('option2')
})


test('autoselect', async ({page}) => {
    await page.locator('#autocomplete').pressSequentially('am')
   const options = await page.locator('.ui-menu-item')
   const count = await options.count()

   for (let i=0; i<count; i++) {
let text = await options.nth(i).textContent()
if (text === 'Gambia') {
    await options.nth(i).click();
    break;
}}
await page.pause()
})


test('autoselect method2', async ({page}) => {
     await page.locator('#autocomplete').pressSequentially('in')
await page.getByRole('listitem').filter ({hasText:/^India$/}).click();
})

test('checkbox', async ({page}) => {
await page.getByRole('checkbox').nth(2).check();
await page.getByRole('checkbox').nth(0).check();
})

})