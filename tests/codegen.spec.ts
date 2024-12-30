// Codegen
// To ope a codegen we have a command as below
// npx playwright codegen "URL"

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await page.getByPlaceholder('email@example.com').click();
  await page.getByPlaceholder('email@example.com').fill('test7lYM@gmail.com');
  await page.getByPlaceholder('email@example.com').press('Tab');
  await page.getByPlaceholder('enter your passsword').fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
  await expect(page.locator('h3')).toContainText('Automation');
  await page.getByRole('textbox', { name: 'search' }).click();
  await page.getByRole('textbox', { name: 'search' }).fill('IPHONE');
  await expect(page.getByRole('textbox', { name: 'search' })).toHaveValue('IPHONE');
});

test.only('testing', async function({ page }) {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.getByRole('link', { name: 'Open New Seperate Windows' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('h1')).toContainText('Selenium automates browsers.');
  await page1.getByRole('link', { name: 'About Selenium' }).click();
  await expect(page1.getByRole('main')).toContainText('History of Selenium');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByPlaceholder('Email id for Sign Up').fill('test@123')
  await expect(page.getByPlaceholder('Email id for Sign Up')).toHaveValue('test@123');
});