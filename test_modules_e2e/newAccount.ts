
import path from 'path';

import { test } from '../fixtures.ts';

test('test', async ({ context3 }) => {
  const pages = context3.pages();
  const page = pages.length > 0 ? pages[0] : await context1.newPage();



  

  // Get the first page or create a new one if none exist
  // 07.19.2024
  

  // Open fafafa.io website
  const fafafa = "https://www.fafafa.io/";
  await page.goto(fafafa);

  await page.click('text=Connect');

  const [newPage] = await Promise.all([
    context3.waitForEvent('page'),
    page.getByText('Tonkeeper').click(),  // Click button
    page.getByText('Browser Extension').click(),
  ]);

  await newPage.click('text=Start');

  const [walletPage] = await Promise.all([
    context3.waitForEvent('page'),
    await newPage.click('text=New Wallet'),
  ]);

  await walletPage.click('text=Continue');


  const texts: string[] = await walletPage.evaluate(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const textNodes: string[] = [];
    let node: Node | null;

    while ((node = walker.nextNode()) !== null) {
      const nodeValue = node.nodeValue ? node.nodeValue.trim() : '';
      // 排除包含空格、数字、标点符号或中文字符的节点
      if (nodeValue && !/[\s\d.,!?;:，。！？、：]/.test(nodeValue) && !/[\u4e00-\u9fa5]/.test(nodeValue)) {
        textNodes.push(nodeValue);
      }
    }

    return textNodes;
  });

  

  console.log(texts);

  await walletPage.click('text=Continue');



 

  
  //这些 xpaths 在哪里？页面上有 3 个输入框。每个输入框的起点都有一个索引数字。
  //我们使用 xpath 来获取索引数字，然后使用索引号从 24 个单词数组中获取相应的单词。
  //where are these xpaths? There are 3 input fields on the page. At the starting point of each input field, there is an index number.
  //we use the xpaths to get the index numbers and then use the index numbers to get the corresponding word from our 24 words array.
  const xpaths = [
    '/html/body/div[1]/div/div/div/div[3]/label[1]/span',
    '/html/body/div[1]/div/div/div/div[3]/label[2]/span',
    '/html/body/div[1]/div/div/div/div[3]/label[3]/span'
  ];

  
  const numbers: number[] = [];

  for (const xpath of xpaths) {
    const locator = walletPage.locator(`xpath=${xpath}`);
    await locator.waitFor(); 
    const text = await locator.textContent();

    if (text !== null) {
      const number = parseFloat(text.trim());

      if (!isNaN(number)) {
        numbers.push(number);
      } else {
        console.error(`Failed to convert text to number for XPath: ${xpath}`);
      }
    } else {
      console.error(`Failed to locate element or extract text content for XPath: ${xpath}`);
    }
  }

 






  

  // // 输出提取的数字
  console.log(`Extracted numbers: ${numbers}`);

  for (let i = 0; i < numbers.length; i++) {
    await walletPage.fill(`input[tabindex="${i + 1}"]`, texts[numbers[i] - 1]);
  }

  await walletPage.click('text=Continue');

  await walletPage.fill('input:below(:text("Password"))', password);
  await walletPage.keyboard.press('Tab');
  await walletPage.keyboard.type('951369ting');
  await walletPage.click('text=Continue');
  await walletPage.waitForSelector('text=your wallet');
  
  await page.click('div.go1392445990.go1383659099 button.go3758850101.go1339123738[data-tc-icon-button="true"]')
  
  await page.click('text=Connect');
  await page.getByText('Tonkeeper').click();

  const [newPage2] = await Promise.all([
    context3.waitForEvent('page'),
    
    page.getByText('Browser Extension').click(),
  ]);

  await newPage2.click('text=Connect Wallet');
  const passwordSelector = 'input[type="password"].sc-hJJSeN.ixSRbR';
  await newPage2.fill(passwordSelector, password);
  await newPage2.click('text=Confirm');

  context3.close();
  
  
  

  return {page, texts, context3}; 


});
