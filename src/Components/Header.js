import './Comps.css';

function Header(props){
    return(
        <div id='header'>
            <h1>{props.text}</h1>
            <p>Scraper do planu lekcji lol</p>
        </div>
    )
}

export default Header;