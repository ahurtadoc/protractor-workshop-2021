import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proccedToSignIn: ElementFinder;

  constructor () {
    this.proccedToSignIn = $('.cart_navigation span');
  }

  public async goToSignInStep(): Promise<void> {
    await this.proccedToSignIn.click();
  }
}
