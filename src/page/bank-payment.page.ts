import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrder: ElementFinder;

  constructor () {
    this.confirmOrder = $('#cart_navigation > button > span');
  }

  public async pay(): Promise<void> {
    await this.confirmOrder.click();
  }
}
