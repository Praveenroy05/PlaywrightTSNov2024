// if we want to click each value in dropdown how to write
// .css-11unzgr div
// count()

import {test, expect, Page} from '@playwright/test'

test('Selecting all the drop down elements', async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator(".css-1hwfws3").last().click()
    const allOptions = page.locator(".css-11unzgr div")
    const count = await allOptions.count()
    console.log(count)
    // Click on allOptions from the drop down
    for (let i = count-1; i >=0; i--) {
        await allOptions.nth(i).click({force: true})
        }
    await page.waitForTimeout(5000)
})

// How to select multiple products from the application

const productNames = ["IPHONE 13 PRO", "qwerty", "ZARA COAT 3"];

test.only('E2E Automation - Add Multiple Products', async ({ page }:{page:Page}) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder('email@example.com').fill("test7lYM@gmail.com");
  await page.getByPlaceholder('enter your passsword').fill("Test@123");
  await page.locator("#login").click();
  await expect(page.locator(".fa-sign-out")).toBeVisible();

  const products = page.locator("div.card-body");
  await products.locator("b").first().waitFor();

  const productCount = await products.count();
  for (let i = 0; i < productCount; i++) {
    const productText:string|null = await products.locator("b").nth(i).textContent();
    
    // Check if the product name is in the Array
    if (productNames.includes(productText?.trim())) {
      await products.nth(i).getByRole('button', { name: " Add To Cart" }).click();
    }
  }
  
  await page.waitForTimeout(3000);
});
