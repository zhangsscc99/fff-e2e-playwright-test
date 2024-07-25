import { Page } from "@playwright/test";

export class TonKeeperConfirmPage {
  constructor(private readonly page: Page) {}

  private async confirmPassword() {

    await this.page
      .getByRole("textbox", { name: "Enter your password" })
      .fill("password");

    await this.page.getByRole("button", { name: "Confirm" }).click();
  }

  async confirm() {
    await this.page.getByRole("button", { name: "Confirm" }).click();
    await this.confirmPassword()
  }

  async cancel() {
    return this.page.getByRole("button", { name: "Cancel" }).click();
  }

  async connect() {
    await this.page.getByRole('button', { name: 'Connect Wallet' }).click()
    await this.confirmPassword()

  }
}
