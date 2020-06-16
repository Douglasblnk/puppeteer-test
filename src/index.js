const { login } = require('./modules/login')

const run = () => {
  // console.log('process.e :>> ', process.env['PATH']);
  console.log('======= START SELENIUM SMART-SOLUTION AUTOMATION =======');

  await login();
}

run();
