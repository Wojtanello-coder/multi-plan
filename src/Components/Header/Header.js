import { Link } from 'react-router-dom';
import './Header.css';

import logo from "./logo2.png"

function Header(props){

    return(
        <div>
            <div id='header'>
            <h1>{props.text}</h1>
            <p className='hsubtext'>Made by MS, WJ, KK, KC</p>
            {props.logged==1?(
                 <Link className='logout' to={"/"}>
                    <button>Wyloguj</button>
                </Link>
            ):(
                //tylko po to zeby zdjecie zostalo w miejscu
                <p className='logout'/>
            )}
           
            <a href='http://www.ckziu.jaworzno.pl' target='_blank' className='image'>
                <img src={logo}/>
            </a>
            </div>
            
            {/* paski kolorowe */}
            <div id='ybar'/>
            <div id='gbar'/>
            <div id='rbar'/>
        </div>
    )
}

export default Header;