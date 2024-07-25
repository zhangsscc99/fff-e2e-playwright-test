import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';

import path from 'path';

test('has title', async ({ page }) => {
 const context = await chromium.launchPersistentContext('../Profile 1', {  });
 await context.newPage()

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// import { test, expect } from '@playwright/test';
// import { expect } from '@playwright/test'
// import { test } from '../fixture2.ts';
// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   // await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

