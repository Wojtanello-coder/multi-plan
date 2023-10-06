import './Header.css';

function Header(props){
    return(
        <div id='header'>
            <h1><i>{props.text}</i></h1>
            <p>Scraper do planu lekcji lol</p>
        </div>
    )
}

export default Header;