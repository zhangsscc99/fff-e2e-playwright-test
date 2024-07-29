import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://www.fafafa.io/');
    }

    async connect() {
        await this.page.click('text=Connect');
    }

    async clickConnectButton() {
        await this.page.click('button.go3758850101.go1339123738[data-tc-icon-button="true"]');
    }

    async clickTonkeeper() {
        await this.page.click('text=Tonkeeper');
    }

    async clickBrowserExtension() {
        await this.page.click('text=Browser Extension');
    }

    async clickSave() {
        await this.page.click('text=Save');
    }

    async fillAmount(amount: string) {
        await this.page.fill('#amount', amount);
    }

    async clickSubmit() {
        await this.page.click('xpath=//*[@id="radix-:r5:"]/form/button');
    }

    async closeDialog(dialogCloseButtonSelector: string) {
        if (await this.page.$(dialogCloseButtonSelector) !== null) {
            await this.page.click(dialogCloseButtonSelector);
        }
      }
}
