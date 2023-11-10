import './Footer.css';
import logo from './logo.png';

function Footer(){
    return(
        <div id='footer'>
            <p>made by wj ms kk and kc ckziu</p>
            <a href='http://ckziu.jaworzno.pl' target='_blank'>
                <img src={logo}/>
            </a>
        </div>
    )
}

export default Footer;