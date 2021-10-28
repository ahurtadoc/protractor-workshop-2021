import { $, ElementFinder, ProtractorBrowser } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
  }

  public async goToTShirtMenu(browser: ProtractorBrowser): Promise<void> {
    await browser.wait(browser.ExpectedConditions.presenceOf(this.tShirtMenu), 3000);
    await this.tShirtMenu.click();
  }
}
