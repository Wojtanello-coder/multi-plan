import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


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
            
            nic tu nie ma lol
            {data.map((item, id) => (
                <a key={id} type="submit" href={item[1]}> {item[0]} </a>
            ))}
            <Link className={"link"} to={"/"}> "Wyloguj"</Link>
            

            <Footer/>
        </div>
    )
}

export default Home;