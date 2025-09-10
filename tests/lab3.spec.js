import { test, expect } from '@playwright/test';

test('Lab 3: Navigate to Playwright Getting Started page', async ({ page }) => {

  await page.goto('https://playwright.dev');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveURL(/.*docs\/intro/);
  console.log('New Page Title:', await page.title());
});
