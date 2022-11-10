import Navbar from "./navbar";
import "../estilos/header.css";

function Header() {
    return (
        <div className="header-max-container">
            <div className="header-left-container">
                <div id="name-header">
                    <h1>Web Master's accesories</h1>
                </div>
                <div>
                    <img id="logo" src="/logo.png" alt="headphones logo"/>
                </div>
            </div>
            
            <Navbar/>
            
        </div>
    );
}

export default Header;