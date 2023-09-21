import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
//import puppeteer from "puppeteer";


//let res = await fetch("http://plan.ckziu.jaworzno.pl/", {mode: 'no-cors'});

// let res = await fetch("http://localhost:4000/", {mode: 'no-cors'});
// let text = await res.json()
// console.log(text);

fetch("http://plan.ckziu.jaworzno.pl/", {mode: 'no-cors'})
    .then(res => {
        console.log(res);
    })
function Home(){

    // (async () => {
        
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto("http://plan.ckziu.jaworzno.pl/");
    //     lessons = await page.$$eval(".menu-body", options => { return options.map(option => option.innerHTML)});
    //     console.log(lessons);
    //     await browser.close();
    // })();var http = require('https');

    return(
        <div>
            <Header text="Strona główna"/>
            
            nic tu nie ma lol
            <Link className={"link"} to={"/"}> "Wyloguj"</Link>
            

            <Footer/>
        </div>
    )
}

export default Home;