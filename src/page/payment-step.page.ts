import { $, ElementFinder, ProtractorBrowser } from 'protractor';

export class PaymentStepPage {
  private payByBank: ElementFinder;

  constructor () {
    this.payByBank = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToBankPay(browser: ProtractorBrowser): Promise<void> {
    await browser.wait(browser.ExpectedConditions.presenceOf(this.payByBank), 3000);
    await this.payByBank.click();
  }
}
