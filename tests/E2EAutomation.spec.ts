import {test, expect} from '@playwright/test'

const productName = "IPHONE 13 PRO"

test('E2E Automation' , async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder('email@example.com').fill("test7lYM@gmail.com")
    await page.getByPlaceholder('enter your passsword').fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    const products  = page.locator("div.card-body") 
    // allTextContents() - This methods will return the text value from all the matching elements
    // textContext() - Retunr us a text value from an element
    await products.locator("b").first().waitFor()
    const singleText = await products.locator("b").first().textContent()
    console.log(singleText);

    const productTexts = await products.locator("b").allTextContents() // div.card-body b []
    console.log(productTexts);
    // count()
    const productCount = await products.count() // 4
    for(let i =0; i<productCount; i++){ 
        // nth(index)
        const productText = await products.locator("b").nth(i).textContent()

        if(productText === productName){
            await products.nth(i).getByRole('button', {name: " Add To Cart"}).click()
            break
        }

    }
    await page.waitForTimeout(3000)












})