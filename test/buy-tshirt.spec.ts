import { browser } from 'protractor';
import {
  AddressStepPage,
  BankPaymentPage,
  MenuContentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductAddedModalPage,
  SignInStepPage,
  ProductListPage,
  ShippingStepPage,
  SummaryStepPage
  } from '../src/page';

describe('Open page to buy a t-shirt', () => {

  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('go to tshirt menu and start payment steps', () => {

    beforeAll(async () => {
      const menuContentPage : MenuContentPage = new MenuContentPage();
      const productListPage : ProductListPage = new ProductListPage();
      const productAddedModalPage : ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage : SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu(browser);
      await productListPage.goToAddedModal(browser);
      await productAddedModalPage.goToSummaryStep(browser);

      await summaryStepPage.goToSignInStep(browser);
    });

    describe('sign in to proceed address choosement', () => {
      beforeAll(async () => {
        const signInStepPage : SignInStepPage = new SignInStepPage();
        const addresStepPage : AddressStepPage = new AddressStepPage();

        await signInStepPage.fillForm();
        await signInStepPage.signIn();
        await addresStepPage.goToTShipping();
      });

      describe('choose default address and go to select payment option', () => {

        beforeAll(async () => {
          const shippingStepPage : ShippingStepPage = new ShippingStepPage();

          await shippingStepPage.acceptTerms();
          await shippingStepPage.goToPayStep();
        });

        describe('pay order with bank payment method', () => {

          beforeAll(async () => {
            const paymentStepPage : PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage : BankPaymentPage = new BankPaymentPage();

            await paymentStepPage.goToBankPay(browser);
            await bankPaymentPage.pay();
          });

          it('then should be bought a t-shirt', async () => {
            const orderSummaryPage : OrderSummaryPage = new OrderSummaryPage();

            await expect(orderSummaryPage.getOrderSummary())
                .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
