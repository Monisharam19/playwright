
import{test,expect} from '@playwright/test'
test('validate page title and URL',async ({page})=>{
    await page.goto('https://www.hollandandbarrett.com/');
    const actualTitle =await page.title();
    const actualURL=await page.url();

    const expectTitle ="Holland & Barrett - UK's Leading Health & Wellbeing Store";
    const expecturl ="https://www.hollandandbarrett.com/";

    expect(actualTitle).toBe(expectTitle);
    expect(actualURL).toBe(expecturl);
    

})