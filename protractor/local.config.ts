import { browser, Config } from "protractor";
import { reporter } from "./helpers/reporter";

const chromeConfig = {
  browserName: 'chrome',
  chromeOptions: { args: ["--headless", "--disable-gpu", "--window-size=800,600", "--remote-debugging-port=9222"] }
}


export const config: Config = {
  capabilities: chromeConfig,
  framework: 'jasmine',
  specs: ['../test/google.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
