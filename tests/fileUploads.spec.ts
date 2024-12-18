// launch the url
// identify the element which is for upload the file
// setInputFiles()

import {test, expect} from '@playwright/test'


test('Upload file handling', async ({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    await page.locator("#filesToUpload").setInputFiles([
        "tests/Courses.txt",
        "tests/Cypress.txt"])

    await expect(page.locator("#fileList li").first()).toContainText("Courses.txt")
    await expect(page.locator("#fileList li").last()).toContainText("Cypress.txt")

    })

