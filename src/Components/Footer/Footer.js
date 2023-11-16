import './Footer.css';
import logo from './logo.png';

function Footer(props){

    let temp = props.type;

    return(
        <div id={temp=="dynamic"?"footer":"footerstat"}>
            made by wj ms kk adnd kc ckziu
            <a href='http://ckziu.jaworzno.pl' target='_blank'>
                <img src={logo}/>
            </a>
        </div>
    )
}

export default Footer;