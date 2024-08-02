import path from 'path';
import { test } from '../fixtures';  // Assuming the fixtures file is named fixtures.ts
import { createWallet } from '../modules/newAccount';
import { createWallet2 } from '../modules/newAccount2';

const password = '951369ting';

test('Create Wallet and Handle Referral', async ({ context1, context2 }) => {
  try {
    const { page, texts } = await createWallet(context1, password);

    // Close the dialog
    await page.click('div[role="dialog"][id="radix-:r0:"] button[data-sentry-element="DialogClose"]');

    // Click on 'Referral'
    await page.getByText('Referral').click();
    
    // Handle referral code popup
    const xpathSelector = '//*[@id="root"]/div/div[1]/div/div[3]/button';
    const [newPagePop] = await Promise.all([
      page.waitForEvent('popup'), 
      page.locator(`xpath=${xpathSelector}`).click()
    ]);

    console.log('New page URL:', newPagePop.url());
    await newPagePop.close();

    // Retrieve clipboard content
    const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());
    console.log('Clipboard content:', clipboardContent);

    // Additional logging
    console.log("hello");
    console.log(clipboardContent);
    console.log(password);
    console.log(texts);

    const res2 = await createWallet2(context2, password);
    console.log("second stage");
    const page2 = res2.page;
    const browser2 = res2.context;
   
    const inputLocator = page2.locator('div[role="dialog"][id="radix-:r0:"] input[type="string"]#code');
    
    await inputLocator.fill(clipboardContent as string); 
    
    page2.getByText('Submit').click();

  } catch (error) {
    console.error('Error during wallet creation and referral handling:', error);
  }
});
