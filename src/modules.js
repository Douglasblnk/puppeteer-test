const puppeteer = require('puppeteer')
const moment = require('moment')

const delay = async time => {
  // return
  await webDriver.page.waitFor(time);
}


const webDriver = {
  page: '',
  browser: '',
  
  init: async () => {
    webDriver.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });

    webDriver.page = await webDriver.browser.newPage();

    await webDriver.page.goto('http://localhost:8080', { waitUntil: "networkidle0" });
  },

  login: async () => {
    await webDriver.page.type('input[id="Crachá:"]', '12035');
    await webDriver.page.type('input[id="Senha:"]', '123');

    await webDriver.page.click('.save-button');
  },

  navigateCorrectiveOrder: async () => {
    await delay(3000);

    await webDriver.page.waitForSelector('.items-wrapper', 5000);
    const menuButton = await webDriver.page.$$('.button-wrapper');
    menuButton[1].click();
    
    await delay(1000);

    await webDriver.page.waitForSelector('.card-wrapper', 5000);
    const cardWrapper = await webDriver.page.$$('.card-option');
    cardWrapper[0].click();
    
    await delay(1000);

    await webDriver.page.waitForSelector('.maintance-menu', 5000);
    const maintanceMenuItems = await webDriver.page.$$('.maintance-menu-items');
    maintanceMenuItems[0].click();
  },
  
  createCorrectiveOrder: async () => {
    await webDriver.page.waitForSelector('.ordem-corretiva-root', 5000);

    await delay(1000);

    await webDriver.page.type('input[id="Título:"]', 'OR93DM0010');
    await webDriver.page.type('input[id="Resumo"]', 'Misturadora de massa parou de funcionar');
    
    await webDriver.page.type(
      'textarea[name="comment"]', 'A maquina de mistura aprensentou problemas ao tentar misturar componentes quimicos mais rígido e após algumas horas tendo dificuldades parou completamente de funcionar'
    );
    
    await delay(200);
    await webDriver.page.click('.wizard-footer-right');

    const initialDate = moment().format('DD/MM/YYYY');
    const finalDate = moment().add(4, 'days').format('DD/MM/YYYY');
    
    await delay(200);

    await webDriver.page.type('input[id="Inicio Planejado:"]', initialDate);
    await webDriver.page.type('input[id="Fim Planejado"]', finalDate);

    await delay(1000);
    await webDriver.page.click('.wizard-footer-right');

    await delay(1000);
    await webDriver.page.select('#Equipamento', '4');
    await delay(100);
    await webDriver.page.select('#Prioridade', '2');
    await delay(100);
    await webDriver.page.select('#Setor', '3');
    await delay(100);
    await webDriver.page.select('select[id="Requer Parada"]', 'true');
    await delay(100);
    await webDriver.page.select('#Solicitante', '3');
    await delay(100);
    await webDriver.page.select('#Reporte', '1');

    await delay(1000);
    await webDriver.page.click('.wizard-footer-right');
    
    await delay(1000);

    await webDriver.page.click('.root-save-button-componenet button');
    await webDriver.page.waitForSelector('.modal ', 5000);
    
    await delay(700);
    
    await webDriver.page.click('label[for="checkbox-operations__BV_option_0_"]');
    await delay(100);
    await webDriver.page.click('label[for="checkbox-operations__BV_option_1_"]');
    await delay(100);
    await webDriver.page.click('label[for="checkbox-operations__BV_option_2_"]');
    await delay(100);
    await webDriver.page.click('label[for="checkbox-operations__BV_option_3_"]');
    await delay(100);
    await webDriver.page.click('label[for="checkbox-operations__BV_option_4_"]');
    await delay(200);

    await webDriver.page.click('#salvarEpi');

    await delay(1000);
    await webDriver.page.click('.wizard-footer-right');

    await delay(500);
    await webDriver.page.click('#show-epi-btn');
  },
}

module.exports = webDriver