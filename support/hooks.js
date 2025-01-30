const { BeforeAll, AfterAll, Before, After,setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let context;
setDefaultTimeout(100000);
BeforeAll(async function () {
    // Start the browser once for all scenarios
    browser = await chromium.launch({ 
        channel: 'msedge',  // Use Edge (or remove for default Chromium)
        headless: false,
        timeout: 60000
    });
});

Before(async function () {
    // Create a new context for each scenario but keep the browser open
    context = await browser.newContext();
    this.page = await context.newPage();
});

After(async function () {
    // Close only the page and context, not the browser
    await this.page.close();
    await context.close();
});

AfterAll(async function () {
    // Close the browser only after all scenarios
    await browser.close();
});
