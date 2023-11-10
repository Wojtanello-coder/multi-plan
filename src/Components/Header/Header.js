import './Header.css';

function Header(props){
    return(
        <div>
            <div id='header'>
                <h1><i>{props.text}</i></h1>
                <p>Scraper do planu lekcji lol</p>
            </div>
            
            <div id='ybar'/>
            <div id='gbar'/>
            <div id='rbar'/>
        </div>
    )
}

export default Header;