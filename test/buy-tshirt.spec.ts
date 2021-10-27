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
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 150000;
  });

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
    await(browser.sleep(10000));

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(5000));

    await productListPage.goToAddedModal();
    await(browser.sleep(8000));

    await productAddedModalPage.goToSummaryStep();
    await(browser.sleep(5000));

    await summaryStepPage.goToSignInStep();
    await(browser.sleep(8000));

    await signInStepPage.fillForm();
    await signInStepPage.signIn();
    await(browser.sleep(5000));

    await addresStepPage.goToTShipping();
    await(browser.sleep(5000));

    await shippingStepPage.acceptTerms();
    await shippingStepPage.goToPayStep();
    await(browser.sleep(5000));

    await paymentStepPage.goToBankPay();
    await(browser.sleep(5000));

    await bankPaymentPage.pay();
    await(browser.sleep(5000));

    await expect(orderSummaryPage.getOrderSummary())
      .toBe('Your order on My Store is complete.');
  });
});
