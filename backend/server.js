const puppeteer = require('puppeteer');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://plan.ckziu.jaworzno.pl/");
    lessons = (await page.$$eval(".link", options => { return options.map(option => [option.innerHTML, option.href])}));
    await browser.close();

    res.json(lessons);
})

app.get('/plan', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://plan.ckziu.jaworzno.pl/?classid=4BEE37BA37491D0A");
    lessons = (await page.$$eval(".lesson-1,.lesson-2", options => options.map(option => {
        let table = []
        for (const i in [0,1,2,3]) {
            table.push(option.children[4].children[0].children[i].innerHTML.trim())
        }
        return table;
    }) ));
    await browser.close();
    
    res.json(lessons);
})
app.listen(4001);