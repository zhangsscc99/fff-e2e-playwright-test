import { chromium, BrowserContext } from '@playwright/test';
import path from 'path';
import { test as base } from '@playwright/test';

const createBrowserContext = async (userDataDir: string): Promise<BrowserContext> => {
  const pathToExtension = path.join(__dirname, 'assets/Extensions/omaabbefbmiijedngplfjmnooppbclkk/3.13.0_0');
  return await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`
    ]
  });
};

export const test = base.extend<{
  context1: BrowserContext;
  context2: BrowserContext;
}>({
  context1: async ({}, use) => {
    const browserContext = await createBrowserContext('../assets/Profile_test/Profile');
    await use(browserContext);
    await browserContext.close();
  },
  context2: async ({}, use) => {
    const browserContext = await createBrowserContext('../assets/Profile_test/Profile2');
    await use(browserContext);
    await browserContext.close();
  }
});
