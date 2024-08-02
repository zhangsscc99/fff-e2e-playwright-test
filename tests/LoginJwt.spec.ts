import { test } from '../fixtures.ts';
import { HomePage } from '../pages/HomePage.ts';
import { TonkeeperPage } from '../pages/TonKeeperPage.ts';

test('test', async ({ context1 }) => {
    const pages = context1.pages();
    const page = pages.length > 0 ? pages[0] : await context1.newPage();

    const homePage = new HomePage(page);
    const tonkeeperPage = new TonkeeperPage(page);

    await homePage.goto();
    await homePage.connect();
    
    const [newPage] = await Promise.all([
        context1.waitForEvent('page'),  
        homePage.clickTonkeeper(),  
        homePage.clickBrowserExtension(),
    ]);

    const tonkeeperNewPage = new TonkeeperPage(newPage);
    await tonkeeperNewPage.start();

    const [walletPage] = await Promise.all([
        context1.waitForEvent('page'),
        tonkeeperNewPage.existingWallet(),
    ]);

    const tonkeeperWalletPage = new TonkeeperPage(walletPage);
    const words = [
        'arrow', 'unfair', 'luxury', 'cement', 'vivid', 'turn',
        'message', 'power', 'monkey', 'fine', 'decrease', 'black',
        'song', 'enhance', 'urge', 'drum', 'finger', 'crazy',
        'simple', 'witness', 'tide', 'alert', 'cliff', 'kitten'
    ];
    const password = '951369ting';

    await tonkeeperWalletPage.fillWords(words);
    await tonkeeperWalletPage.continue();
    await tonkeeperWalletPage.fillPassword(password);
    await tonkeeperWalletPage.continue();
    await tonkeeperWalletPage.waitForWallet();

    await homePage.clickConnectButton();
    await homePage.connect();

    const [newPage2] = await Promise.all([
        context1.waitForEvent('page'),  
        homePage.clickTonkeeper(),
        homePage.clickBrowserExtension(),
    ]);

    const tonkeeperNewPage2 = new TonkeeperPage(newPage2);
    await tonkeeperNewPage2.connectWallet();
    await tonkeeperNewPage2.fillPasswordField(password);
    await tonkeeperNewPage2.confirm();

    let jwtToken = '';
   
    await page.route('**/account_info', (route, request) => {
        const headers = request.headers();
        if (headers['authorization']) {
            jwtToken = headers['authorization'];
            console.log('JWT:', headers['authorization']);
            console.log(request);
        }
    });

    const apiBaseUrl = 'https://fafafa.io'; // Replace with your actual API base URL

    page.on('request', request => {
        const url = request.url();
        if (url.includes('/account_info')) {
            const headers = request.headers();
            if (headers['authorization']) {
                const jwtToken = headers['authorization'];
                console.log(`Captured JWT: ${jwtToken}`);
            }
        }
    });
});
