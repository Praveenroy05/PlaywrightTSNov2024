// import test and expect function from playwright/test module
import {test, expect} from '@playwright/test'

test("First Test Case11", async function({browser}){
 
    // create a browser context
    // Create a page on the context

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    // fixture
    // asynchornous  - Not synchronous


    // await Launch the browser
    // await Goto url - https://practicetestautomation.com/practice-test-login/
    // await Fill the username
    // await Fill the password
    // await Click on Submit button
    // await Check whether we are on the dashboard page or not


})

test("First Test Case", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student", {timeout :100000})
    await page.locator("input#password").fill("Password123")
    await page.locator("button.btn").click()
    await expect(page.locator(".post-title")).toBeVisible()

    await expect(page.locator(".post-title")).toContainText("Logged In Successfully")

})

test("First Test Case1", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student", {timeout :100000})
    await page.locator("input#password").fill("Password123")
    await page.locator("button.btn").click()
    await expect(page.locator(".post-title")).toBeVisible()

    await expect(page.locator(".post-title")).toContainText("Logged In Successfully")

})

test("First Test Case2", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student", {timeout :100000})
    await page.locator("input#password").fill("Password123")
    await page.locator("button.btn").click()
    await expect(page.locator(".post-title")).toBeVisible()

    await expect(page.locator(".post-title")).toContainText("Logged In Successfully")

})

test("First Test Case3", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student", {timeout :100000})
    await page.locator("input#password").fill("Password123")
    await page.locator("button.btn").click()
    await expect(page.locator(".post-title")).toBeVisible()

    await expect(page.locator(".post-title")).toContainText("Logged In Successfully")

})

test("First Test Case4", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student", {timeout :100000})
    await page.locator("input#password").fill("Password123")
    await page.locator("button.btn").click()
    await expect(page.locator(".post-title")).toBeVisible()

    await expect(page.locator(".post-title")).toContainText("Logged In Successfully")

})

