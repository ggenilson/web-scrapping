const puppeteer = require('puppeteer');

const config = require('../config/');
const tranformArray = require('../utils/transformArray');

module.exports = {
  async index(request, response) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(config.URL, {
      waitUntil: 'load',
      timeout: 0,
    });

    const pageContent = await page.$$eval('tbody tr[role="row"] td', tds =>
      tds.map(td => {
        return td.innerText;
      })
    );

    let end = 11;
    let cont = 0;
    let newPageContent = [];

    for (let i = 0; i < pageContent.length; i += 11) {
      newPageContent[cont] = tranformArray(pageContent.slice(i, end));
      cont++;
      end += 11;
    }

    await browser.close();

    response.send({ data: newPageContent });
  },
};
