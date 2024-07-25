import { test } from '../fixtures.ts';

test('test', async ({ context2 }) => {

    const pages = context2.pages;
    
    
    // Get the first page or create a new one if none exist
    const page = pages.length > 0 ? pages[0] : await context2.newPage();

    // if (browser.pages().length > 0) {
    //     page = browser.pages()[0];
    // } else {
    //     page = await browser.newPage();
    // }

    // Open fafafa.io website
    const fafafa = "https://www.fafafa.io/"
    await page.goto(fafafa);


    await page.click('text=Connect');

    const [newPage] = await Promise.all([
        context2.waitForEvent('page'),  
        page.getByText('Tonkeeper').click(),  // Click button
        page.getByText('Browser Extension').click(),
    ]);

   
    
//eng-to-Chinese
    await newPage.click('text=Start'); 
    

    const [walletPage] = await Promise.all([
        context2.waitForEvent('page'),  // Wait for the new page event
        await newPage.click('text=Existing Wallet'),
      ]);

    

    const words = [
        "canyon", "cruise", "floor", "ring", "hamster", "coffee", "riot", "stool",
        "armed", "sell", "smooth", "shallow", "glare", "educate", "kitchen", "fossil",
        "gauge", "cabbage", "vapor", "guess", "turkey", "chef", "hamster", "struggle"
    ];

    const password = '951369ting';

    for (let i = 0; i < words.length; i++) {
        await walletPage.fill(`input[tabindex="${i + 1}"]`, words[i]);
    }
    //Eng, Chinese
    await walletPage.click('text=Continue');
    

    
    await walletPage.fill('input:below(:text("Password"))', password);

    await walletPage.keyboard.press('Tab');
    
    
    await walletPage.keyboard.type(password);
   

     
    //Eng, Chinese
    await walletPage.click('text=Continue');
    //Eng, Chinese
    await walletPage.waitForSelector('text=your wallet');

    await page.click('button.go3758850101.go1339123738[data-tc-icon-button="true"]');

    await page.click('text=Connect');

    const [newPage2] = await Promise.all([
        context2.waitForEvent('page'),  
        page.getByText('Tonkeeper').click(),  // Click button
        page.getByText('Browser Extension').click(),
    ]);

    
   
    
    //Eng, Chinese
    await newPage2.click('text=Connect Wallet'); 
    const passwordSelector = 'input[type="password"].sc-hJJSeN.ixSRbR';
    await newPage2.fill(passwordSelector, '951369ting');
    //Eng, Chinese
    await newPage2.click('text=Confirm');
   

    
    const dialogCloseButtonSelector = 'div[role="dialog"][id="radix-:r0:"] button[data-sentry-element="DialogClose"]';

    // if (await page.$(dialogCloseButtonSelector) !== null) {
    //     await page.click(dialogCloseButtonSelector);
    // }
    await page.click(dialogCloseButtonSelector);
    await page.click('text=Save');
    
    await page.fill('#amount', '1');
    
    await newPage2.close();
    
    
    


    const [newPage3] = await Promise.all([
        context2.waitForEvent('page'),  
        
        // await page.click('button[type="submit"]'),
        await page.click('xpath=//*[@id="radix-:r5:"]/form/button'),
    ]);

    

    await newPage3.click('button.sc-Gqece.cXPFCG');
    //password input
    // await newPage3.fill('xpath=/html/body/div[2]/div[2]/div/div/div/div[3]/form/div[1]/div/input', password);
    const inputSelector = 'input[type="password"].sc-hJJSeN.ixSRbR';

    // Wait for the input field to be available
    await newPage3.waitForSelector(inputSelector);

    // Fill the password into the input field
    await newPage3.type(inputSelector, password); 
    await newPage3.click('button.sc-Gqece.jciBOl');
    


  
    

});
