import { Link } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Home(){
    return(
        <div>
            <Header text="Strona główna"/>
            
            nic tu nie ma lol
            <Link className={"link"} to={"/"}> "Wyloguj"</Link>

            <Footer/>
        </div>
    )
}

export default Home;