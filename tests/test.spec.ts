import { test, expect } from '@playwright/test';
import { login } from '../modules/auth';

test('example test', async ({ page }) => {
  // 使用登录模块进行登录
  await login(page, 'myUsername', 'myPassword');
  
  // 继续你的测试逻辑
  await page.goto('https://example.com/some-page');
  console.log("hello world2");
});
