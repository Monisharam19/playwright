import { test } from '@playwright/test';

test('Lab 4: Multiple Navigations in One Test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  console.log('Playwright Title:', await page.title());

  await page.goto('https://www.wikipedia.org/');
  console.log('Wikipedia Title:', await page.title());

  await page.goto('https://www.google.com');
  console.log('Google Title:', await page.title());
});
