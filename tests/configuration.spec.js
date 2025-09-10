const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
 testDir: './tests',
 timeout: 30000,
 expect: { timeout: 5000 },
 
 // Reporter configuration
 reporter: [
 ['list'], // Console reporter
 ['allure-playwright', {
 outputFolder: 'allure-results',
 }]
 ],
 
});
