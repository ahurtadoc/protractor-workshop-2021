import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proccedToShipping: ElementFinder;

  constructor () {
    this.proccedToShipping = $('#center_column > form > p > button > span');
  }

  public async goToTShipping(): Promise<void> {
    await this.proccedToShipping.click();
  }
}
