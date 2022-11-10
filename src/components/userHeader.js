import {UserNavbar} from "./navbar";
import "../estilos/header.css";

function UserHeader() {
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
            
            <UserNavbar/>
            
        </div>
    );
}

export default UserHeader;