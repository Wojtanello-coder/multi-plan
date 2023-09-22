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
    console.log(lessons);
    await browser.close();

    //Access-Control-Allow-Origin: http://siteA.com
    res.json(lessons);
    //res.send("test");
    //res.end("hello");

})

app.listen(4001);