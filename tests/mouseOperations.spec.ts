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

test('Handling drag and drop', async ({page})=>{
    // dragTo(drop element locator)
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")
    await page.locator("div#draggable").dragTo(page.locator("div#droppable"))
    await page.waitForTimeout(3000)
})

test('Right click and double click', async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.getByText("right click me").click({button : 'right'})
    await page.locator(".context-menu-icon-edit").click()
    await page.getByText("Double-Click Me To See Alert").dblclick()
    await page.waitForTimeout(3000)

})

test.only('Handling alert using PW', async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    await page.locator("#alertButton").click()
    page.on('dialog', (dialog) => {
        console.log(dialog.message())
        expect(dialog.message()).toBe('Do you confirm action?')
        dialog.accept()
    })
    await page.locator("#confirmButton").click()
})


test('Handling prompt alert using PW', async ({page})=>{
    const text = "Testing"
    await page.goto("https://demoqa.com/alerts")
    page.on('dialog', (dialog) => {
        console.log(dialog.message())
        dialog.accept(text)
    })
    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toContainText(`You entered ${text}`)
})


