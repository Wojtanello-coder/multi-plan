import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Comps.css";
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
    const [classes, setClass] = useState([]);
    const [data, setData] = useState({});

    useEffect(() => {
        try{
            fetch("http://localhost:4001")
            .then(res => res.json())
            .then((data) => setClass(data));
        } catch (e) {
            console.log(e);
        }
    }, []);

    const fetchPlanUrl = (planUrl, event) => {
        
        try{
            fetch("http://localhost:4001/plan/"+planUrl.substring(1,planUrl.indexOf("=")) + "/" + planUrl.substring(planUrl.length-16))
            .then(res => res.json())
            .then((data) => setData(data));
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <div>
            <Header text="Strona główna"/>
            
            <h3 id="button_title">Wybierz klasę / nauczyciela</h3>
            
            <div id="buttons">
                
                 {classes.map((item, id) => (
                <div key={id}>
                     <button type="submit" href={item[1]} onClick={(event) => fetchPlanUrl(item[1], event)} > {item[0]} </button>
                     <br/>
                </div>
               
                ))}
            </div>
            
            <br/>

            <Link className={"link"} id="logout" to={"/"}>
                <button>"Wyloguj lol"</button>
            </Link>

            <Plan data={data} id="planbox"/>

            <Footer/>
        </div>
    )
}

export default Home;