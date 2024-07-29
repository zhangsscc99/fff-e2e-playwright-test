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
        await this.page.click('text=Continue');
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
}
