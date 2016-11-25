import wd from 'wd';
import 'colors';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { configure } from './logging';
import * as caps from './caps';

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;


export default function (callback) {
  const testEnv = process.env.TEST_ENV || 'browser';
  const isBrowser = testEnv === 'browser';
  const nodeEnv = process.env.NODE_ENV === 'production' ? 'release' : 'debug';

  const serverConfig = {
    host: 'localhost',
    port: isBrowser ? 4444 : 4723, // default ports for webdriver-manager : appium
  };
  const desired = caps[testEnv][nodeEnv];

  describe('Initiate tests', function test() {
    this.timeout(900000);
    const driver = wd.promiseChainRemote(serverConfig);

    describe('Prepare environment', () => {
      after(() => driver.quit());

      before(() => {
        configure(driver);

        if (isBrowser) {
          return driver
            .init(desired)
            .sleep(1000)
            .get(desired.app + (process.env.PORT || '3000'));
        }
        return driver.init(desired);
      });

      callback(driver);
    });
  });
}
