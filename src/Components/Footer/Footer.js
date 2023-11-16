import './Footer.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

function Footer(props){

    let temp = props.type;

    return(
        <div id={temp=="dynamic"?"footer":"footerstat"}>
            made by wj ms kk adnd kc ckziu

            {/* WYLOGOWANIE */}
            
            {props.logged? (
            <Link className="link" id="logout" to={"/"}>
                <button>Wyloguj</button>
            </Link>
            ): (
                console.log('lol')
            )}
            

            <a href='http://ckziu.jaworzno.pl' target='_blank'>
                <img src={logo}/>
            </a>
        </div>
    )
}

export default Footer;