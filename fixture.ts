import { test as base, BrowserContext, chromium } from '@playwright/test';
import path  from 'path';

export const text = base.extend<{
    context1: BrowserContext
    context2: BrowserContext
}>({
    context1: async() => {
        // /tmp/xxxxx/
        const pathToExtension = require('path').join(__dirname, 'my-extension');
          const userDataDir = '/tmp/test-user-data-dir';
          const browserContext = await chromium.launchPersistentContext(userDataDir, {
            headless: false,
            args: [
              `--disable-extensions-except=${pathToExtension}`,
              `--load-extension=${pathToExtension}`
            ]
          });
          return browserContext;
    },
    context2: async () => {
        const pathToExtension = require('path').join(__dirname, 'my-extension');
          const userDataDir = '/tmp/test-user-data-dir'; 
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

text('test', async ({ context1, context2 }) => {
  context1.pages();
    context1.newPage();
    context2.newPage();
    context2.pages();
})
