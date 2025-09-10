import { test, expect } from '@playwright/test';

// Define a test case named 'test'
test('test', async ({ page }) => {
  // Navigate to the TodoMVC demo application
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Click on the textbox to focus it
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();

  // Add the first todo item: "do to assments"
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('do to assments');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Add the second todo item: "learning"
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('learning');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Add the third todo item: "metting"
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('metting');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Mark "metting" as completed
  await page.getByRole('listitem').filter({ hasText: 'metting' }).getByLabel('Toggle Todo').check();

  // Mark "learning" as completed
  await page.getByRole('listitem').filter({ hasText: 'learning' }).getByLabel('Toggle Todo').check();

  // Mark "do to assments" as completed
  await page.getByRole('listitem').filter({ hasText: 'do to assments' }).getByLabel('Toggle Todo').check();

  // Click the "Clear completed" button to remove completed tasks
  await page.getByRole('button', { name: 'Clear completed' }).click();
});
