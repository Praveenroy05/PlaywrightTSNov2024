// if we want to click each value in dropdown how to write
// .css-11unzgr div
// count()

import {test, expect} from '@playwright/test'

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