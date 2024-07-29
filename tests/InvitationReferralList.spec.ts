// import path from 'path';
// import { createWallet } from '../createWallet';
// import { Login } from '../Login';


// const userDataDir = path.resolve("../Profile_CICD/Profile_test");
// const userDataDir2 = path.resolve("../Profile_CICD/Profile_test2");
// const userDataDir3 = path.resolve("../Profile_CICD/Profile_test3");


// const password = '951369ting';

// (async () => {
//   try {
//     const res = await createWallet(userDataDir, password);
//     const page = res.page;
//     const texts = res.texts;
//     const browser = res.browser;
//     await page.click('div[role="dialog"][id="radix-:r0:"] button[data-sentry-element="DialogClose"]');

    
    
//     await page.getByText('Referral').click();

  
//     // const referralCodeElement = await page.waitForSelector('div.flex.flex-col span.text-sm');
  
//     // const referralCode = await referralCodeElement.textContent();

//     // 等待直到 XPath 元素可用
//     // 这里的xpath是referral code，之前可读性强的一个路径不可用了
//     const referralCodeElement = await page.waitForSelector('xpath=/html/body/div[1]/div/div[1]/div/div[3]/button[1]/div/span[2]');

//     // 从 XPath 元素中提取文本内容
//     const referralCode = await page.evaluate(element => element.textContent, referralCodeElement);


    
//     console.log(referralCode);
//     console.log(password);
//     console.log(texts);

    

//     const res2 = await createWallet(userDataDir2, password);
//     const page2 = res2.page;
//     const browser2 = res2.browser;
//     // const inputLocator = page2.locator('//html/body/div[4]/form/input');
    
//     const inputLocator = page2.locator('div[role="dialog"][id="radix-:r0:"] input[type="string"]#code');
    
//     await inputLocator.fill(referralCode as string); 
    
//     page2.getByText('Submit').click();

//     const res3 = await Login(userDataDir3, password, texts);

//     const page3 = res3.page;
    
//     const browser3 = res3.browser;
  
//     await page3.click('div[role="dialog"][id="radix-:r0:"] button[data-sentry-element="DialogClose"]');
    
//     await page3.getByText('Referral').click();

//     browser.close();
//     browser2.close();
//     browser3.close();
    

    

//     // console.log('Additional actions completed successfully.');
//   } catch (error) {
//     console.error('Error during automation process:', error);
//   }
// })();




    

  

    
  
  


// //     // await browser.close();
// // })();