import './helpers/setup';
import { configure } from './helpers/logging';
import { ios10Dev as deviceConfig } from './helpers/caps';
import wd from 'wd';

describe('Menu', function test() {
  this.timeout(300000);
  let driver;

  before(() => {
    const serverConfig = {
      host: 'localhost',
      port: 4723,
    };
    driver = wd.promiseChainRemote(serverConfig);
    configure(driver);
    return driver.init(deviceConfig);
  });

  after(() => driver.quit());

  it('items should not be visible by default', () =>
    driver
      .waitForElementByName('Todos', 10000)
      .isDisplayed((err, isVisible) =>
        isVisible.should.not.be.ok,
      ),
  );

  it('could click on menu button', () =>
    driver
      .elementById('menuBtn').click(),
  );

  it('items should be visible after click on menu button', () =>
    driver
      .elementByName('Todos')
      .isDisplayed((err, isVisible) =>
        isVisible.should.be.ok,
      ),
  );
});
