import { test, expect } from '@playwright/test';

test('Full Page Screenshot', async ({page})=>{
    // Take a full page screenshot
    await page.goto("https://reqres.in/")
    await page.screenshot({path: "FullPageScreenshot.png"})
    const supportReqRes = await page.getByRole('button', { name: 'Support ReqRes' }).first()
    await supportReqRes.screenshot({path: "partialScreenshot.png"})

})


