import { test } from '../fixtures';
import { HomePage } from '../pages/HomePage';
import { TonkeeperPage } from '../pages/TonKeeperPage';

const password = '951369ting';

test('create and connect wallet', async ({ context1, context2, context3 }) => {
  // First Context
  const page1 = await context1.newPage();
  const homePage1 = new HomePage(page1);
  const tonkeeperPage1 = new TonkeeperPage(page1);

  await homePage1.goto();
  await homePage1.connect();
  await homePage1.clickTonkeeper();
  await homePage1.clickBrowserExtension();
  await tonkeeperPage1.start();
  await tonkeeperPage1.existingWallet();

  const words = ['word1', 'word2', 'word3'];  // Replace with actual words
  await tonkeeperPage1.fillWords(words);
  await tonkeeperPage1.continue();
  await tonkeeperPage1.fillPassword(password);
  await tonkeeperPage1.waitForWallet();

  const clipboardContent = await page1.evaluate(() => navigator.clipboard.readText());
  console.log('Clipboard content:', clipboardContent);

  // Second Context
  const page2 = await context2.newPage();
  const homePage2 = new HomePage(page2);
  const tonkeeperPage2 = new TonkeeperPage(page2);

  await homePage2.goto();
  await homePage2.connect();
  await homePage2.clickTonkeeper();
  await homePage2.clickBrowserExtension();
  await tonkeeperPage2.connectWallet();
  await tonkeeperPage2.fillPasswordField(password);
  await tonkeeperPage2.confirm();

  // Third Context
  const page3 = await context3.newPage();
  const homePage3 = new HomePage(page3);
  const tonkeeperPage3 = new TonkeeperPage(page3);

  await homePage3.goto();
  await homePage3.connect();
  await homePage3.clickTonkeeper();
  await homePage3.clickBrowserExtension();
  await tonkeeperPage3.connectWallet();
  await tonkeeperPage3.fillPasswordField(password);
  await tonkeeperPage3.confirm();

  console.log('Additional actions completed successfully.');
});
