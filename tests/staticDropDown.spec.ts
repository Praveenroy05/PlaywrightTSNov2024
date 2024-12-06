import {test, expect} from '@playwright/test'

// Drop down - 
// 2 types of DD

// 1. Static drop down
// --> select tag 
/*
 - Write a locators to identify the DD
 - selectOption(name/label/value)

*/


// --> Non select tag


// 2. Dynamic DD

/*
 - Write a locators to identify the DD
 - Click on the Drop down element
 - Click on the required value from the DD
*/







test('Handling drop down developed using select tag', async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")
    // Locator for the DD
    await page.locator("#country").selectOption("DZ")
   // await page.waitForTimeout(3000) // Jordan
    await page.locator("#country").selectOption({label:"Jordan"})
   // await page.waitForTimeout(3000)
    await page.locator("#country").selectOption({index:30})
  //  await page.waitForTimeout(3000)
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(['volvo', 'Opel', 'Audi'])
    await page.waitForTimeout(3000)

})


test.only('Handling drop down developed using non select tag', async function({page}){
    await page.goto("https://demoqa.com/select-menu")

/*
 - Write a locators to identify the DD
 - Click on the Drop down element
 - Click on the required value from the DD
*/

await page.locator(".css-1hwfws3").nth(1).click()
await page.locator("#react-select-3-option-0-4").click()
await page.waitForTimeout(3000)
await page.locator(".css-1hwfws3").last().click()

await page.locator("#react-select-4-option-1").click()
await page.locator("#react-select-4-option-3").click()
await page.waitForTimeout(3000)
})