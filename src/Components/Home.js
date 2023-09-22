import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Plan from "./Plan";
import Header from "./Header";
import Footer from "./Footer";
//import puppeteer from "puppeteer";


//let res = await fetch("http://plan.ckziu.jaworzno.pl/", {mode: 'no-cors'});

// let res = await fetch("http://localhost:4000/", {mode: 'no-cors'});
// let text = await res.json()
// console.log(text);

// fetch("http://plan.ckziu.jaworzno.pl/", {mode: 'no-cors'})
//     .then(res => {
//         console.log(res);
//     })
function Home(){
    const [data, setData] = useState([]);

    useEffect(() => {
        FetchData();
    }, []);

    const FetchData = async () => {
        try {
            const res = await fetch("http://localhost:4001/");
            if (!res.ok) {
                throw new Error('Netowkkrawawbhinafdasd!!!');
            }
            
            let json = await res.json();
            setData(json);
        } catch (e) {
            console.error(e);
        }
    }
    // (async () => {
        
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto("http://plan.ckziu.jaworzno.pl/");
    //     lessons = await page.$$eval(".menu-body", options => { return options.map(option => option.innerHTML)});
    //     console.log(lessons);
    //     await browser.close();
    // })();var http = require('https');

    //        <button key={id}>{item}</button>
    return(
        <div>
            <Header text="Strona główna"/>
            
            <h3 id="button_title">Wybierz klasę / nauczyciela</h3>
            <div id="buttons">
                
                 {data.map((item, id) => (
                <div>
                     <a key={id} type="submit" href={item[1]}> {item[0]} </a>
                     <br/>
                </div>
               
                ))}
            </div>
           <Plan class="Tu sie wstawi plan kiedys ok?"/>
            <Link className={"link"} to={"/"}> "Wyloguj"</Link>
            

            <Footer/>
        </div>
    )
}

export default Home;