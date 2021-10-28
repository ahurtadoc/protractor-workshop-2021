import { $, ElementFinder, ProtractorBrowser } from 'protractor';

export class ProductAddedModalPage {
  private proceedToPaymen: ElementFinder;

  constructor () {
    this.proceedToPaymen = $('[style*="display: block;"] .button-container > a');
  }

  public async goToSummaryStep(browser: ProtractorBrowser): Promise<void> {
    await browser.wait(browser.ExpectedConditions.presenceOf(this.proceedToPaymen), 3000);
    await this.proceedToPaymen.click();

  }
}
