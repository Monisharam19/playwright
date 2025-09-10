import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  //await expect(locator).assertionMethod(expectedValue);
  //.toBeHidden() - Element is not visible

  await expect(page).toBeVisible('Automation Testing Practice');

  await expect(page).toBeInViewport('Automation Testing Practice');
   await expect(page).toBeHidden();

});