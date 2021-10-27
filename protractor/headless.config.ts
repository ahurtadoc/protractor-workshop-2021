import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

const chromeConfig = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--disable-gpu']
  }
};

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  },
  capabilities: chromeConfig,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
