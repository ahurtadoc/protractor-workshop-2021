import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private proceedToPaymen: ElementFinder;

  constructor () {
    this.proceedToPaymen = $('[style*="display: block;"] .button-container > a');
  }

  public async goToSummaryStep(): Promise<void> {
    await this.proceedToPaymen.click();
  }
}
