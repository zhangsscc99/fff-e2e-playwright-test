import { test as base, BrowserContext, chromium } from '@playwright/test';
import path  from 'path';

export const test = base.extend<{
    context1: BrowserContext
    // context2: BrowserContext
}>({
    context1: async() => {
        // /tmp/xxxxx/
        
        const pathToExtension = path.join(__dirname, 'assets/Extensions/omaabbefbmiijedngplfjmnooppbclkk/3.13.0_0');
        const userDataDir = '../assets/Profile_test';
        const browserContext = await chromium.launchPersistentContext(userDataDir, {
            headless: false,
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`
            ]
        });
        return browserContext;
    }

})



// test('test context', async ({ context1 }) => {
//     context1.pages();
//     context1.newPage();
    
// })


    // context2: async () => {
    //     const pathToExtension = require('path').join(__dirname, 'my-extension');
    //       const userDataDir = '/tmp/test-user-data-dir'; 
    //       const browserContext = await chromium.launchPersistentContext(userDataDir, {
    //         headless: false,
    //         args: [
    //           `--disable-extensions-except=${pathToExtension}`,
    //           `--load-extension=${pathToExtension}`
    //         ]
    //       });
    //       return browserContext;
    // }
