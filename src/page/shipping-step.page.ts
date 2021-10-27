import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private proccedTopay: ElementFinder;
  private termsOfService: ElementFinder;

  constructor () {
    this.proccedTopay = $('#form > p > button > span');
    this.termsOfService = $('#cgv');
  }

  public async acceptTerms(): Promise<void> {
    this.termsOfService.click();
  }

  public async goToPayStep(): Promise<void> {
    await this.proccedTopay.click();
  }
}
