const { Builder, By, Key, until } = require('selenium-webdriver')

const login = async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('http://localhost:8080')
  await driver.findElement(By.id('Crachá:')).sendKeys('12035');
  await driver.findElement(By.id('Senha:')).sendKeys('123');

  await driver.findElement(By.className('save-button')).click()
}

module.exports = {
  login
}