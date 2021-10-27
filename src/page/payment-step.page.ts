import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBank: ElementFinder;

  constructor () {
    this.payByBank = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToBankPay(): Promise<void> {
    await this.payByBank.click();
  }
}
