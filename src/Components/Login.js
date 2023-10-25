import {Link, useNavigate} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
 
function Login(props){

    const nav = useNavigate();

    const [logged, setLogged] = useState(false);

    const login = () => {
        let pass = document.getElementById('login_password').value;
        let password = "qwe";
        console.log("LOGIN: ", login, "  ", "PASSWORD: ", pass);

        if(pass === "") document.getElementById('error').textContent = "Podaj hasło >:(";
        if(pass === password){
            setLogged(true);
            props.onSaveInnerData(true)
            nav('/qweasd');
        }
    }

    return(
        <div>
            <Header text="Zaloguj się"/>

            <div id='form'>
                <input type='password' id='login_password' placeholder='Podaj hasło'/>

                <br/>
                <button onClick={login}>Zaloguj</button>
                <br/>
                
                <span id='error'></span>
            </div>
            


            <Footer/>
        </div>
    )
}

export default Login;