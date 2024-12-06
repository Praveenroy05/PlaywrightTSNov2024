// click - click() - 
// double click 
// right click
// mouse hover on an element - 
// drag and drop - 
// Alert/pop-up


import {test, expect} from '@playwright/test'


test('Mouse Operations - Hover', async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    await page.getByText("Add-ons").first().hover()
    await expect(page.getByTestId("test-id-Student Discount")).toBeVisible()
})

test.only('Handling drag and drop', async ({page})=>{
    // dragTo(drop element locator)
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")
    await page.locator("div#draggable").dragTo(page.locator("div#droppable"))
    await page.waitForTimeout(3000)
})