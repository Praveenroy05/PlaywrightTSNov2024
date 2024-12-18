import {test, expect} from '@playwright/test'


/*
1. Launch the url
2. Identify the frames available on the page by using frameLocator() and store the locator inside a varaible (framePage)
3. Now framePage will have a complete control on the frames
4. As usualy methods and actions that we can perform on the frames using framePage as fixture or variable


*/

test('Frames handling', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#checkBoxOption1").check()
    await expect(page.locator("#checkBoxOption1")).toBeChecked()
    const framePage = page.frameLocator("#courses-iframe")

    await framePage.getByRole('link', {name:"All Access plan"}).first().click()

    await expect(framePage.getByRole('heading', {name:'All Access Subscription'}).first()).toContainText("All Access Subscription")
    await page.getByRole('link', {name :'Home'}).click()
    await page.waitForTimeout(5000)


})