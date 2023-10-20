import './Footer.css';
import logo from './logo.png';

function Footer(){
    return(
        <div id='footer'>
            made by wj ms kc and kk ckziu
            <a href='http://ckziu.jaworzno.pl' target='_blank'>
                <img src={logo}/>
            </a>
        </div>
    )
}

export default Footer;