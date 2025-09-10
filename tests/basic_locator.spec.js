import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   
  await page.goto('https://github.com/');
  console.log('1. Navigated to GitHub');

  await page.locator('#hero_user_email').click();
  console.log('2. locator selected for enter email');

  const cssSelector = await page.$('octicon octicon-mark-github');
  console.log('2. Found logo  using CSS selector');

  const textSelector = await page.$('text=Sign up for GitHub');
  console.log('3. Found "Sign up for GitHub" using text selector');
  
//  const xpathSelector = await page.$('xpath=//*[@id="FormControl--:Rjahb:"]/div/button/span/span]');
  const xpathSelector = await page.$('xpath=//*[@id="FormControl--:Rjahb:"]/div/button/span/span');

  console.log('4. Found login link using XPath');



//*[@id="FormControl--:Rjahb:"]/div/button/span/span
});
