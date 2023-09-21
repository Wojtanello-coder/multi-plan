import {Link} from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
 
function Login(){

    const login = () => {
        let login = document.getElementById('login_name').value;
        let pass = document.getElementById('login_password').value;

        console.log("LOGIN: ", login, "  ", "PASSWORD: ", pass);

        if(login == "" || pass == "") document.getElementById('error').textContent = "Wypełnij wszystkie pola";
        else document.getElementById('error').textContent = null;
    }

    return(
        <div>
            <Header text="Zaloguj się"/>

            <div id='form'>
                <input type='text' id='login_name' placeholder='Podaj login'/><br/>
                <input type='password' id='login_password' placeholder='Podaj hasło'/>

                <br/>
                <button onClick={login}>TEMP</button>
                <Link className={'link'} to={'/qweasd'}>
                    <button>"Zaloguj się"</button>
                </Link>
                <br/>
                <Link className={'link'} to={'/register'}>
                    <button>Rejestracja</button>
                </Link> <br/>
                <span id='error'></span>
            </div>
            


            <Footer/>
        </div>
    )
}

export default Login;