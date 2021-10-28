import { $, ElementFinder, ProtractorBrowser } from 'protractor';

export class SummaryStepPage {
  private proccedToSignIn: ElementFinder;

  constructor () {
    this.proccedToSignIn = $('.cart_navigation span');
  }

  public async goToSignInStep(browser: ProtractorBrowser): Promise<void> {
    await browser.wait(browser.ExpectedConditions.presenceOf(this.proccedToSignIn), 3000);
    await this.proccedToSignIn.click();
  }
}
