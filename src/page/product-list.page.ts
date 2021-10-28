import { $, ElementFinder, ProtractorBrowser } from 'protractor';

export class ProductListPage {
  private addToCart: ElementFinder;

  constructor () {
    this.addToCart = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToAddedModal(browser: ProtractorBrowser): Promise<void> {
    await browser.wait(browser.ExpectedConditions.presenceOf(this.addToCart), 3000);
    await this.addToCart.click();
  }
}
