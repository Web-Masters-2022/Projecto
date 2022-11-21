import React from "react";
import {Link} from "react-router-dom";
import "../estilos/header.css";


function Navbar() {
    return (
        <div className="navbar-container">
            <Link className="navbar" to="/productos">Lista Productos</Link>
            <Link className="navbar" to="/modificar">Modificar Productos</Link>
            <Link className="navbar" to="/ventas">Lista Ventas</Link>
        </div>
    )
}

export function UserNavbar() {
    return (
        <div className="navbar-container">
            <Link className="navbar" to="/comprar">Lista Productos</Link>
            <Link className="navbar" to="/carrito">Carrito</Link>
        </div>
    )
}

export default Navbar;