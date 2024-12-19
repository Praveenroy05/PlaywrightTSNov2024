import {test, expect} from '@playwright/test'

test('Multiple window handling', async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 =  context.waitForEvent('page')

    await page.getByRole('button', { name: 'click' }).click()

    const newPage = await page1
    await newPage.getByText("Downloads").click()
    await expect(newPage.locator(".d-1")).toContainText("Downloads")
    await page.getByText("WebTable").first().click()
    await expect(page.getByText('EDIT', { exact: true })).toBeVisible()




})

test.only('Multiple window handling using page fixture', async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 =  page.waitForEvent('popup')

    await page.getByRole('button', { name: 'click' }).click()
    
    const newPage = await page1
    await newPage.getByText("Downloads").click()
    await expect(newPage.locator(".d-1")).toContainText("Downloads")
    await page.getByText("WebTable").first().click()
    await expect(page.getByText('EDIT', { exact: true })).toBeVisible()
})