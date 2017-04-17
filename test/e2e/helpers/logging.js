export function configure(driver) {
  /* eslint-disable no-console */
  driver.on('status', (info) => {
    console.log(info.cyan);
  });
  driver.on('command', (meth, path, data) => {
    console.log(' > ', meth.yellow, path.grey, data || '');
  });
  driver.on('http', (meth, path, data) => {
    console.log(' > ', meth.magenta, path, (data || '').grey);
  });
  /* eslint-enable no-console */
}
