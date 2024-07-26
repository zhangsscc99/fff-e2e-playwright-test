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
}
