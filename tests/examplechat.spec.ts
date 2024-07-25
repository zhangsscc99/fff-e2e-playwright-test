import { test } from '../fixtures.ts';

test('test', async ({ context1 }) => {
    const pages = context1.pages();
    const page = pages.length > 0 ? pages[0] : await context1.newPage();

    await page.goto('https://www.fafafa.io/');
    await page.click('text=Connect');
    
    const [newPage] = await Promise.all([
        context1.waitForEvent('page'),  
        page.getByText('Tonkeeper').click(),  // Click button
        page.getByText('Browser Extension').click(),
    ]);

    await newPage.click('text=Start'); 

    const [walletPage] = await Promise.all([
        context1.waitForEvent('page'),  // Wait for the new page event
        await newPage.click('text=Existing Wallet'),
    ]);

    const words = [
        'arrow', 'unfair', 'luxury', 'cement', 'vivid', 'turn',
        'message', 'power', 'monkey', 'fine', 'decrease', 'black',
        'song', 'enhance', 'urge', 'drum', 'finger', 'crazy',
        'simple', 'witness', 'tide', 'alert', 'cliff', 'kitten'
    ];
    const password = '951369ting';

    for (let i = 0; i < words.length; i++) {
        await walletPage.fill(`input[tabindex="${i + 1}"]`, words[i]);
    }
    await walletPage.click('text=Continue');
    
    await walletPage.fill('input:below(:text("Password"))', password);
    await walletPage.keyboard.press('Tab');
    await walletPage.keyboard.type(password);
    await walletPage.click('text=Continue');
    await walletPage.waitForSelector('text=your wallet');

    await page.click('button.go3758850101.go1339123738[data-tc-icon-button="true"]');
    await page.click('text=Connect');

    const [newPage2] = await Promise.all([
        context1.waitForEvent('page'),  
        page.getByText('Tonkeeper').click(),  // Click button
        page.getByText('Browser Extension').click(),
    ]);

    await newPage2.click('text=Connect Wallet'); 
    const passwordSelector = 'input[type="password"].sc-hJJSeN.ixSRbR';
    await newPage2.fill(passwordSelector, '951369ting');
    await newPage2.click('text=Confirm');
});