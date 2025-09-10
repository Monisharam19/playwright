import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the TodoMVC demo application
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Click on the textbox to focus it (used for adding new todos)
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();

  // Assert that the page title is correct
  await expect(page).toHaveTitle('React • TodoMVC');

  // Take a screenshot of the homepage and save it as 'homepage.png'
  await page.screenshot({ path: 'homepage.png' });

  // Reload the page to ensure it refreshes correctly
  await page.reload();

  // Click on the link labeled "real TodoMVC app." (likely external or informational)
  await page.getByRole('link', { name: 'real TodoMVC app.' }).click();

  // Navigate to the "active" filter view of the TodoMVC app
  await page.goto('https://demo.playwright.dev/todomvc/#/active');

  // Return to the default "all" view of the TodoMVC app
  await page.goto('https://demo.playwright.dev/todomvc/#/');
});
