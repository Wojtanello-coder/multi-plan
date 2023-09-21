import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

function Register(){

    const register = () => {
        let login = document.getElementById('register_name').value;
        let pass = document.getElementById('register_password1').value;
        let repass = document.getElementById('register_password2').value;

        console.log("LOGIN: ", login, "  ", "PASSWORD: ", pass, " ", repass);

        if(login == "" || pass == "" || repass == "") document.getElementById('error').textContent = "Wypełnij wszystkie pola";
        else if(pass != repass) document.getElementById('error').textContent = "Hasła nie są takie same";
        else document.getElementById('error').textContent = null;
    }

    return(
        <div>
            <Header text="Rejestracja"/>

            <div id='form'>
                <input type='text' id='register_name' placeholder='Podaj login'/>
                <input type='password' id='register_password1' placeholder='Podaj hasło'/>
                <input type='password' id='register_password2' placeholder='Powtórz hasło'/><br/>

                <button onClick={register}>TEMP</button>

                <Link className={"link"} to={"/"}> 
                    <button>"Zarejestruj"</button>
                </Link> <br/>
                <span id='error'></span>
            </div>
            

            <Footer/>
        </div>
    )
}

export default Register;