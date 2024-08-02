import { Page, BrowserContext } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TonkeeperPage } from '../pages/TonKeeperPage';
import { test as base } from '../fixtures';  // assuming the fixtures file is named fixtures.ts

export async function createWallet2(context: BrowserContext, password: string) {
    const page = await context.newPage();
    const homePage = new HomePage(page);
    const tonkeeperPage = new TonkeeperPage(page);

    await homePage.goto();
    await homePage.connect();

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        homePage.clickTonkeeper(),
        homePage.clickBrowserExtension()
    ]);

    // await newPage.waitForLoadState();
    const tonkeeperPage2 = new TonkeeperPage(newPage);

    await tonkeeperPage2.start();

    const [walletPage] = await Promise.all([
        context.waitForEvent('page'),
        console.log("new wallet 1"),
        tonkeeperPage2.newWallet(),
        console.log("new wallet")
    ]);

    // await walletPage.waitForLoadState();
    const walletPageModel = new TonkeeperPage(walletPage);

    await walletPageModel.continue();

    const texts = await walletPageModel.getTextNodes();
    console.log(texts);

    await walletPageModel.continue();

    const xpaths = [
        '/html/body/div[1]/div/div/div/div[3]/label[1]/span',
        '/html/body/div[1]/div/div/div/div[3]/label[2]/span',
        '/html/body/div[1]/div/div/div/div[3]/label[3]/span'
    ];

    const numbers = await walletPageModel.getNumbersFromXPaths(xpaths);
    console.log(`Extracted numbers: ${numbers}`);

    const words = numbers.map(number => texts[number - 1]);
    await walletPageModel.fillWords(words);
    await walletPageModel.continue();

    await walletPageModel.fillPassword(password);
    await walletPageModel.continue();
    await walletPageModel.waitForWallet();

    // await homePage.clickConnectButton();
    await page.click('div.go1392445990.go1383659099 button.go3758850101.go1339123738[data-tc-icon-button="true"]')
    await homePage.connect();
    await homePage.clickTonkeeper();

    const [newPage2] = await Promise.all([
        context.waitForEvent('page'),
        homePage.clickBrowserExtension()
    ]);

    await newPage2.waitForLoadState();
    const tonkeeperPage3 = new TonkeeperPage(newPage2);

    await tonkeeperPage3.connectWallet();
    await tonkeeperPage3.fillPasswordField(password);
    await tonkeeperPage3.confirm();

    return {page, texts, context};
}
