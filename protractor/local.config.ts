import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';
import { AwesomeReport } from 'jasmine-awesome-report';

const reporterConfig = {
  fullPath: 'reports',
  fileName: 'awesome',
  merge: true
};

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
    browser.manage().timeouts().implicitlyWait(0);
    jasmine.getEnv().addReporter(AwesomeReport.getReport(reporterConfig));
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
};
