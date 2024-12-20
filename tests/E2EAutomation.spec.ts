import {test, expect, Page, Locator} from '@playwright/test'

const productName :string = "IPHONE 13 PRO"
const email: string = "test7lYM@gmail.com"

test('E2E Automation' , async ({page}:{page:Page})=>{

    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder('email@example.com').fill(email)
    await page.getByPlaceholder('enter your passsword').fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    const products  = page.locator("div.card-body") 
    // allTextContents() - This methods will return the text value from all the matching elements
    // textContext() - Return us a text value from an element
    await products.locator("b").first().waitFor()
    const singleText :string|null = await products.locator("b").first().textContent()
    console.log(singleText);

    const productTexts :string[] = await products.locator("b").allTextContents() // div.card-body b []
    console.log(productTexts);
    // count()
    const productCount = await products.count() // 4
    for(let i =0; i<productCount; i++){ 
        // nth(index)
        const productText:string|null = await products.locator("b").nth(i).textContent()

        if(productText === productName){
            await products.nth(i).getByRole('button', {name: " Add To Cart"}).click()
            break
        }

    }
    await page.locator("[routerLink='/dashboard/cart']").click()
    await expect(page.locator("div.cartSection h3").first()).toHaveText(productName)
    await page.getByRole('button', {name:'Checkout'}).click()
    await expect(page.locator("div.details__user label").first()).toHaveText(email)
    await page.getByPlaceholder("Select Country").pressSequentially("ind")

    const drodownvalues :Locator = page.locator("section.ta-results button")

    await drodownvalues.first().waitFor()
    const countOfDropdownvalues = await drodownvalues.count() // 4

    for(let i =0; i<countOfDropdownvalues; i++){ 
        // nth(index)
        const countryText:string|null = await drodownvalues.nth(i).textContent()

        if(countryText === " India"){
            await drodownvalues.nth(i).click()
            break
        }

    }
    await page.locator("a.action__submit").click()
    await expect(page.locator(".hero-primary")).toBeVisible()
    const orderID : string|null = await page.locator("label.ng-star-inserted").textContent()
    console.log(orderID); // | dfdf |
    await page.locator("[routerLink='/dashboard/myorders']").first().click()
    await page.locator("tbody").waitFor()
    const rows :Locator = page.locator("tbody tr")
    const countOfRows = await rows.count();

    for(let i =0; i<countOfRows; i++){ 
        // nth(index)
        const orderIDText:string|null = await rows.nth(i).locator("th").textContent()

        if(orderID.includes(orderIDText)){
            await rows.nth(i).locator("button").first().click()
            break
        }

    }

    const orderSummaryOrderID : string|null= await page.locator("div.col-text").textContent()
    await expect(orderID.includes(orderSummaryOrderID)).toBeTruthy()
    
















})