// automateProcess.ts
import { chromium, BrowserContext, Page } from 'playwright';
import path from 'path';




export async function Login(userDataDir: string, password: string, words: string[]) {
    // const userDataDir = path.resolve("../Profile_test");
    // const userDataDir = path.resolve("C:\\Users\\zhang\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 13")

    
    const extensionPath = path.resolve(__dirname, '../Extensions/omaabbefbmiijedngplfjmnooppbclkk/3.13.0_0');


    // Launch browser with a persistent context
    const browser: BrowserContext = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        args: [
            `--disable-extensions-except=${extensionPath}`,
            `--load-extension=${extensionPath}`
        ]
    });

    // Get the first page or create a new one if none exist
    let page: Page;
    if (browser.pages().length > 0) {
        page = browser.pages()[0];
    } else {
        page = await browser.newPage();
    }

    // Open fafafa.io website
    const fafafa = "https://www.fafafa.io/"
    await page.goto(fafafa);


    await page.click('text=Connect');

    const [newPage] = await Promise.all([
        browser.waitForEvent('page'),  
        page.getByText('Tonkeeper').click(),  // Click button
        page.getByText('Browser Extension').click(),
    ]);

   
    

    await newPage.click('text=Start'); 
    

    const [walletPage] = await Promise.all([
        browser.waitForEvent('page'),  // Wait for the new page event
        await newPage.click('text=Existing Wallet'),
      ]);

    
    
   

    for (let i = 0; i < words.length; i++) {
        await walletPage.fill(`input[tabindex="${i + 1}"]`, words[i]);
    }
    await walletPage.click('text=Continue');
    

    
    await walletPage.fill('input:below(:text("Password"))', password);

    await walletPage.keyboard.press('Tab');
    
    
    await walletPage.keyboard.type(password);
   

     

    await walletPage.click('text=Continue');
    await walletPage.waitForSelector('text=your wallet');

    await page.click('div.go1392445990.go1383659099 button.go3758850101.go1339123738[data-tc-icon-button="true"]');

    await page.click('text=Connect');

    const [newPage2] = await Promise.all([
        browser.waitForEvent('page'),  
        page.getByText('Tonkeeper').click(),  // Click button
        page.getByText('Browser Extension').click(),
    ]);

    
   
    

    await newPage2.click('text=Connect Wallet'); 
    const passwordSelector = 'input[type="password"].sc-hJJSeN.ixSRbR';
    await newPage2.fill(passwordSelector, '951369ting');
    await newPage2.click('text=Confirm');


    return {page, browser};


  
}


