import './helpers/setup';
import { configure } from './helpers/logging';
import { ios10 as deviceConfig } from './helpers/caps';
import wd from 'wd';

describe('Home', function test() {
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

  it('default text should be visible', () =>
    driver
      .waitForElementByName('Actum app', 10000)
      .isDisplayed((err, isVisible) =>
        isVisible.should.be.ok,
      ),
  );

  it('menu should not be visible by default', () =>
    driver
      .waitForElementById('menu__home-link', 10000)
      .isDisplayed((err, isVisible) =>
        isVisible.should.not.be.ok,
      ),
  );

  it('could click on menu button', () =>
    driver
      .elementById('header__menu-button').click(),
  );

  it('items should be visible after click on menu button', () =>
    driver
      .elementById('menu__home-link')
      .isDisplayed((err, isVisible) =>
        isVisible.should.be.ok,
      ),
  );
});
