import { browser } from 'protractor';
import {
  AddressStepPage,
  BankPaymentPage,
  MenuContentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductAddedModalPage,
  ProductListPage,
  ShippingStepPage,
  SummaryStepPage
  } from '../src/page';
import { SignInStepPage } from '../src/page/sign-in-step.page';

describe('Buy a t-shirt', () => {

  it('then should be bought a t-shirt', async () => {
    const menuContentPage : MenuContentPage = new MenuContentPage();
    const productListPage : ProductListPage = new ProductListPage();
    const productAddedModalPage : ProductAddedModalPage = new ProductAddedModalPage();
    const summaryStepPage : SummaryStepPage = new SummaryStepPage();
    const signInStepPage : SignInStepPage = new SignInStepPage();
    const addresStepPage : AddressStepPage = new AddressStepPage();
    const shippingStepPage : ShippingStepPage = new ShippingStepPage();
    const paymentStepPage : PaymentStepPage = new PaymentStepPage();
    const bankPaymentPage : BankPaymentPage = new BankPaymentPage();
    const orderSummaryPage : OrderSummaryPage = new OrderSummaryPage();

    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();

    await productListPage.goToAddedModal();

    await productAddedModalPage.goToSummaryStep();

    await summaryStepPage.goToSignInStep();

    await signInStepPage.fillForm();
    await signInStepPage.signIn();

    await addresStepPage.goToTShipping();

    await shippingStepPage.acceptTerms();
    await shippingStepPage.goToPayStep();

    await paymentStepPage.goToBankPay();

    await bankPaymentPage.pay();

    await expect(orderSummaryPage.getOrderSummary())
      .toBe('Your order on My Store is complete.');
  });
});
