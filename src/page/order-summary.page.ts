import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderResult: ElementFinder;

  constructor () {
    this.orderResult = $('#center_column > div > p > strong');
  }

  public async getOrderSummary(): Promise<String> {
    return await this.orderResult.getText();
  }
}
