import { chromium, BrowserContext } from '@playwright/test';
import path from 'path';

import { test as base } from '@playwright/test';


export const test = base.extend<{
    context1: BrowserContext
    context2: BrowserContext
    context3: BrowserContext
    context4: BrowserContext
    context5: BrowserContext
}>({
    context1: async ({}, use) => {
        const pathToExtension = path.join(__dirname, 'assets/Extensions/omaabbefbmiijedngplfjmnooppbclkk/3.13.0_0');
        const userDataDir = '../assets/Profile_test/Profile 10';
        const browserContext = await chromium.launchPersistentContext(userDataDir, {
            headless: false,
            permissions: ['clipboard-read', 'clipboard-write'],
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`
            ]
        });
        await use(browserContext);
        await browserContext.close();
    },
    context2: async ({}, use) => {
        const pathToExtension = path.join(__dirname, 'assets/Extensions/omaabbefbmiijedngplfjmnooppbclkk/3.13.0_0');
        const userDataDir = '../assets/Profile_test/Profile 11'; 
        const browserContext = await chromium.launchPersistentContext(userDataDir, {
            headless: false,
            permissions: ['clipboard-read', 'clipboard-write'],
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`
            ]
        });
        await use(browserContext);
        await browserContext.close();
    },
    context3: async ({}, use) => {
        const pathToExtension = path.join(__dirname, 'assets/Extensions/omaabbefbmiijedngplfjmnooppbclkk/3.13.0_0');
        const userDataDir = '../assets/Profile_test/Profile 13'; 
        const browserContext = await chromium.launchPersistentContext(userDataDir, {
            headless: false,
            permissions: ['clipboard-read', 'clipboard-write'],
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`
            ]
        });
        await use(browserContext);
        await browserContext.close();
    },
    context4: async ({}, use) => {
        const pathToExtension = path.join(__dirname, 'assets/Extensions/omaabbefbmiijedngplfjmnooppbclkk/3.13.0_0');
        const userDataDir = '../assets/Profile_test/Profile 13'; 
        const browserContext = await chromium.launchPersistentContext(userDataDir, {
            headless: false,
            permissions: ['clipboard-read', 'clipboard-write'],
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`
            ]
        });
        await use(browserContext);
        await browserContext.close();
    },
    context5: async ({}, use) => {
        const pathToExtension = path.join(__dirname, 'assets/Extensions/omaabbefbmiijedngplfjmnooppbclkk/3.13.0_0');
        const userDataDir = '../assets/Profile_test/Profile 14'; 
        const browserContext = await chromium.launchPersistentContext(userDataDir, {
            headless: false,
            permissions: ['clipboard-read', 'clipboard-write'],
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`
            ]
        });
        await use(browserContext);
        await browserContext.close();
    }
});
