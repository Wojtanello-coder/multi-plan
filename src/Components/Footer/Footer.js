import './Footer.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

function Footer(props){

    let temp = props.type;

    return(
        //zmiana id zaleznie od propsow (zeby zawsze dotykal dolu ekranu)
        <div id={temp=="dynamic"?"footer":"footerstat"}>
            made by wj ms kk adnd kc ckziu

            {/* WYLOGOWANIE */}
            
            {/* logout tylko na stronie home */}
            {props.logged? (
            <Link className="link" id="logout" to={"/"}>
                <button>Wyloguj</button>
            </Link>
            ): (
                // lol
                console.log('lol')
            )}
            
            {/* link do strony szkoly */}
            <a href='http://ckziu.jaworzno.pl' target='_blank'>
                <img src={logo}/>
            </a>
        </div>
    )
}

export default Footer;