import { test } from '../fixtures.ts';
import { HomePage } from '../pages/HomePage';
import { TonkeeperPage } from '../pages/TonKeeperPage';

test('test', async ({ context2 }) => {
    const pages = context2.pages;
    const page = pages.length > 0 ? pages[0] : await context2.newPage();

    const homePage = new HomePage(page);
    // const tonkeeperPage = new TonkeeperPage(page);

    await homePage.goto();
    await homePage.connect();
    
    const [newPage] = await Promise.all([
        context2.waitForEvent('page'),  
        homePage.clickTonkeeper(),
        homePage.clickBrowserExtension(),
    ]);

    const tonkeeperNewPage = new TonkeeperPage(newPage);
    await tonkeeperNewPage.start();

    const [walletPage] = await Promise.all([
        context2.waitForEvent('page'),
        tonkeeperNewPage.existingWallet(),
    ]);

    const tonkeeperWalletPage = new TonkeeperPage(walletPage);
    const words = [
        'canyon', 'cruise', 'floor', 'ring', 'hamster', 'coffee', 'riot', 'stool',
        'armed', 'sell', 'smooth', 'shallow', 'glare', 'educate', 'kitchen', 'fossil',
        'gauge', 'cabbage', 'vapor', 'guess', 'turkey', 'chef', 'hamster', 'struggle'
    ];
    const password = '951369ting';
//
    await tonkeeperWalletPage.fillWords(words);
    await tonkeeperWalletPage.continue();
    await tonkeeperWalletPage.fillPassword(password);
    await tonkeeperWalletPage.waitForWallet();

    await homePage.clickConnectButton();
    await homePage.connect();

    const [newPage2] = await Promise.all([
        context2.waitForEvent('page'),  
        homePage.clickTonkeeper(),
        homePage.clickBrowserExtension(),
    ]);

    const tonkeeperNewPage2 = new TonkeeperPage(newPage2);
    await tonkeeperNewPage2.connectWallet();
    await tonkeeperNewPage2.fillPasswordField(password);
    await tonkeeperNewPage2.confirm();

    const dialogCloseButtonSelector = 'div[role="dialog"][id="radix-:r0:"] button[data-sentry-element="DialogClose"]';
    await tonkeeperNewPage2.closeDialog(dialogCloseButtonSelector);

    await homePage.clickSave();
    await homePage.fillAmount('1');

    // await tonkeeperNewPage2.close();

    // const [newPage3] = await Promise.all([
    //     context2.waitForEvent('page'),  
    //     await homePage.clickSubmit(),
    // ]);

     
    await homePage.clickSubmit();

   
    const newPage3 = await context2.waitForEvent('page');


    // await newPage3.click('button.sc-Gqece.cXPFCG');
    // const inputSelector = 'input[type="password"].sc-hJJSeN.ixSRbR';
    // await newPage3.waitForSelector(inputSelector);
    // await newPage3.type(inputSelector, password);
    // await newPage3.click('button.sc-Gqece.jciBOl');
});
