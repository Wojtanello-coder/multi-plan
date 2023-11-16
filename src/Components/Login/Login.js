import {useNavigate} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import './Login.css';
 
function Login(props){

    const nav = useNavigate();

    const [logged, setLogged] = useState(false);

    const login = () => {
        let pass = document.getElementById('login_password').value;
        //secret password
        let password = "qwe";
        console.log("PASSWORD: ", pass);

        if(pass === "") document.getElementById('error').textContent = "Podaj hasło >:(";
        if(pass === password){
            //send to root
            setLogged(true);
            props.onSaveInnerData(true)
            nav('/qweasd');
        }
    }

    return(
        <div>
            <Header text="Zaloguj się"/>

            <div id='form'>
                <div>
                    <input type='password' id='login_password' placeholder='Podaj hasło'/><br/>
                    <button onClick={login}>Zaloguj</button><br/>
                    <span id='error'></span>
                </div>
                
            </div>
            


            <Footer type="static" logged={false}/>
        </div>
    )
}

export default Login;