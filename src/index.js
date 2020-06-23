const webDriver = require('./modules.js');

(async () => {
  await webDriver.init();
  await webDriver.login();
  await webDriver.navigateCorrectiveOrder();
  await webDriver.createCorrectiveOrder();
})()
