import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Home.css";
import Plan from "../Plan/Plan";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home(){

    const [classes, setClass] = useState([]);
    const [data, setData] = useState({});

    useEffect(() => {
        try{
            fetch("http://localhost:4001")
            .then(res => res.json())
            .then((data) => setClass(data));
            // .then(res => res.json())
            // .then((data) => setInfo(data));
        } catch (e) {
            console.log(e);
        }
    }, []);

    const fetchPlanUrl = (planUrl, event) => {
        
        try{
            fetch("http://localhost:4001/plan/"+planUrl.substring(1,planUrl.indexOf("=")) + "/" + planUrl.substring(planUrl.length-16))
            .then(res => res.json())
            .then((data) => setData(data));
            // .then(res => res.json())
            // .then((data) => setInfo(data));
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

            <div id="planbox">
                <Plan data={data}/>
            </div>

            <br/>

            <Link className={"link"} id="logout" to={"/"}>
                <button>"Wyloguj lol"</button>
            </Link>

            {/* <Footer/> */}

        </div>
    );
}

export default Home;