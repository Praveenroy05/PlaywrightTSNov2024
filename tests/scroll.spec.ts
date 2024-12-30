import { test, expect } from '@playwright/test';

test("scrolling", async ({page})=>{
    await page.goto("https://reqres.in/")
    const supportReqRes = await page.getByRole('button', { name: 'Support ReqRes' }).first()

    await supportReqRes.scrollIntoViewIfNeeded()
    await supportReqRes.click()
    await page.waitForTimeout(5000)

})