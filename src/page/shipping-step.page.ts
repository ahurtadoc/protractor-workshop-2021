import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private proccedTopay: ElementFinder;
  private termsOfService: ElementFinder;

  constructor () {
    this.termsOfService = $('#cgv');
    this.proccedTopay = $('#form > p > button > span');
  }

  public async acceptTerms(): Promise<void> {
    await this.termsOfService.click();
  }

  public async goToPayStep(): Promise<void> {
    await this.proccedTopay.click();
  }
}
