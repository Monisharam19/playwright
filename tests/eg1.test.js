import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('i phone');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('.puisg-col.puisg-col-0-of-4 > div').first().click();
}); 