import './Header.css';

function Header(props){
    return(
        <div>
            <div id='header'>
                {/* tytul strony pochylony */}
                <h1><i>{props.text}</i></h1>
                <p>Scraper do planu lekcji lol</p>
            </div>
            
            {/* paski kolorowe */}
            <div id='ybar'/>
            <div id='gbar'/>
            <div id='rbar'/>
        </div>
    )
}

export default Header;