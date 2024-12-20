import {test, expect, Page} from '@playwright/test'

test.only('Handling Check box', async ({page}:{page:Page})=>{
 
    await page.goto("https://demoqa.com/checkbox")
    await page.getByTitle("Toggle").click()

    // first() - Identify the first matching element from all the matching elements
    // last() - Identify the last matching element from all the matching elements
    // nth(index) - Identify the nth matching element from all the matching elements - Index will starts with 0
    const checkbox = page.locator("span.rct-title")
    await checkbox.nth(1).check()
    await expect(checkbox.nth(1)).toBeChecked()
    await checkbox.nth(1).uncheck()
    await expect(checkbox.nth(1)).not.toBeChecked()
    await checkbox.nth(1).check()

    await expect(page.locator("#result span").nth(1)).toHaveText("abcd")

})

test('Handling Radio button using force', async ({page})=>{
 
    await page.goto("https://demoqa.com/radio-button")
    await page.locator("#impressiveRadio").check({force :true})
    await expect(page.locator("#impressiveRadio")).toBeChecked()
    await expect(page.locator(".text-success")).toHaveText("Impressive")

})

test('Handling Radio button', async ({page})=>{
 
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Employed").check()
    await expect(page.getByLabel("Employed")).toBeChecked()
   // await expect(page.locator(".text-success")).toHaveText("Impressive")

})

