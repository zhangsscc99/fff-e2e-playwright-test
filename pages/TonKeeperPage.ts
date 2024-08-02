import { Page } from '@playwright/test';

export class TonkeeperPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    

    async start() {
        await this.page.click('text=Start');
    }

    

    async existingWallet() {
        await this.page.click('text=Existing Wallet');
    }

    async fillWords(words: string[]) {
        for (let i = 0; i < words.length; i++) {
            await this.page.fill(`input[tabindex="${i + 1}"]`, words[i]);
        }
    }

    async continue() {
        await this.page.click('text=Continue');
    }

    async fillPassword(password: string) {
        await this.page.fill('input:below(:text("Password"))', password);
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.type(password);
    }

    async connectWallet() {
        await this.page.click('text=Connect Wallet');
    }

    async fillPasswordField(password: string) {
        await this.page.fill('input[type="password"].sc-hJJSeN.ixSRbR', password);
    }

    async confirm() {
        await this.page.click('text=Confirm');
    }

    async waitForWallet() {
        await this.page.waitForSelector('text=your wallet');
    }

    

    async close() {
      await this.page.close();
    }

    async getTextNodes() {
        return await this.page.evaluate(() => {
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
            const textNodes: string[] = [];
            let node: Node | null;

            while ((node = walker.nextNode()) !== null) {
                const nodeValue = node.nodeValue ? node.nodeValue.trim() : '';
                if (nodeValue && !/[\s\d.,!?;:，。！？、：]/.test(nodeValue) && !/[\u4e00-\u9fa5]/.test(nodeValue)) {
                    textNodes.push(nodeValue);
                }
            }
            return textNodes;
        });
    }

    async getNumbersFromXPaths(xpaths: string[]) {
        const numbers: number[] = [];
        for (const xpath of xpaths) {
            const locator = this.page.locator(`xpath=${xpath}`);
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
        return numbers;
    }

    async newWallet() {
        await this.page.click('text=Create new wallet');
    }
}
