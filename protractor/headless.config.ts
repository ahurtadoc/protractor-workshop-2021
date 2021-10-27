import { browser, Config } from "protractor";
import { reporter } from "./helpers/reporter";

const chromeConfig = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--disable-gpu']
  }
}


export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/google.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  },
  capabilities: chromeConfig,
};
