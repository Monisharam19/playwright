import { test, expect } from '@playwright/test';

test('Lab 2: Validate page title and URL', async ({ page }) => {
  await page.goto('https://www.hollandandbarrett.com/');

  const actualTitle = await page.title();
  console.log('Page Title:', actualTitle);
  const actualURL = page.url();
  console.log('Page URL:', actualURL);

  const expectedTitle = "Holland & Barrett - UK's Leading Health & Wellbeing Store";
  const expectedURL = 'https://www.hollandandbarrett.com/';

  expect(actualTitle).toBe(expectedTitle);
  expect(actualURL).toBe(expectedURL);
});
