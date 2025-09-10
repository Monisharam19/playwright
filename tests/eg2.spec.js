import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page1.waitForTimeout(2000);

  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Women' }).click();
  await page.goBack();
  console.log('3. Went back to example.com');
  await page.goForward();
  console.log('4. Went forward to github.com');
  await page.reload();
  console.log('5. Reloaded github.com');
});
