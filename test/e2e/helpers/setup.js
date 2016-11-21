import wd from 'wd';
import 'colors';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { configure } from './logging';
import * as caps from './caps';

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

const serverConfig = {
  host: 'localhost',
  port: 4723, // default appium port
};

export default function (platform, callback) {
  const desired = caps[platform] || caps.ios10; // FIXME: configurable using gulp
  if (platform === 'browser') serverConfig.port = 4444; // default webdriver-manager port
  describe('Initiate tests', function test() {
    this.timeout(900000);
    const driver = wd.promiseChainRemote(serverConfig);

    describe('Prepare environment', () => {
      after(() => driver.quit());

      before(() => {
        configure(driver);

        if (platform === 'browser') {
          return driver
            .init(desired)
            .get('http://localhost:3000');
        }
        return driver.init(desired);
      });

      callback(driver);
    });
  });
}
