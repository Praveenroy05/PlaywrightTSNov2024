import {test, expect} from '@playwright/test'



test("Handling shadow dom", async ({page})=>{

    await page.goto("https://books-pwakit.appspot.com/explore?q=")
    await page.getByLabel('Search Books').fill("Test")
    await page.locator("div.icon").click()
    await expect(page.locator("h2.title").first()).toBeEnabled()
    
})