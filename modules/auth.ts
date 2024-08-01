import { Page, Locator } from '@playwright/test';

export async function login(page: Page, username: string, password: string): Promise<void> {
  // 这里是你的登录页面的逻辑
  await page.goto('https://example.com/login');
  console.log("hello world")
  
 
}
