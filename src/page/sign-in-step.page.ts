import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;
  private password: ElementFinder;
  private signInButton: ElementFinder;

  constructor () {
    this.signInButton = $('#SubmitLogin > span');
    this.email = $('#email');
    this.password = $('#passwd');
  }

  public async fillForm(): Promise<void> {
    await this.email.sendKeys('aperdomobo@gmail.com');
    await this.password.sendKeys('WorkshopProtractor');
  }

  public async signIn(): Promise<void> {
    await this.signInButton.click();
  }
}
