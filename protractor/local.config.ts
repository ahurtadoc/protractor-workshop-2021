import { browser, Config } from "protractor";

const chromeConfig = {
  browserName: 'chrome',
  chromeOptions: { args: ["--headless", "--disable-gpu", "--window-size=800,600", "--remote-debugging-port=9222"] }
}


export const config: Config = {
  capabilities: chromeConfig,
  framework: 'jasmine',
  specs: ['../test/google.spec.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
};
