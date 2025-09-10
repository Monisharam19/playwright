import { test, expect } from '@playwright/test';

test('drag and drop using locator', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

//   const columnA = page.locator('#column-a');
//   const columnB = page.locator('#column-b');

//   await columnA.dragTo(columnB);
//   await page.mouse.move(100, 100);
//   await page.mouse.down();
//   await page.mouse.move(200, 100)

// });
// Multiple Cpntexts
// const {chromium}=require ('playwright');
// async function multipleContextsExample(){
// const brower=await chromium.launch({headless:false});
//const con1=await brower.newContext();
await page.goto('https://github.com');
console.log('Context 1: GitHub loaded');
const g= await page.title();
console.log('�� Context 1 Title:', g);
//const brower=await chromium.launch({headless:false});
//const con2= await brower.newContext();

await page.goto('https://twitter.com');
console.log('Context 1: twitter loaded');

const t= await page.title();

console.log('�� Context 2 Title:', t);
//multipleContextsExample().catch(console.error);




});
