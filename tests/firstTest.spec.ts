// import test and expect function from playwright/test module
import {test, expect} from '@playwright/test'
//test.describe.configure({timeout : 50000})
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


test("First Test Case using GetBy Locators", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username").fill("student", {timeout :100000})
    await page.locator("input#password").fill("Password123")
    await page.getByRole('button', {name : 'Submit'}).click()
    await expect(page.locator(".post-title")).toBeVisible()

    await expect(page.locator(".post-title")).toContainText("Logged In Successfully")

})

test("First Test Case using GetBy Text", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByRole('button', {name : 'Submit'}).click()
    await expect(page.getByText('Your username is invalid!').first()).toBeVisible()

})

test("First Test Case using GetBy Placeholder", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder('email@example.com').fill("test7lYM@gmail.com")
    await page.getByPlaceholder('enter your passsword').fill("Test@123")

})
