import React, { useState, useEffect } from "react";
import UserHeader from "../components/userHeader";
import StockProductos from "../components/productCardCliente";
//import products from "../data/productStock";
import "../estilos/header.css";
import "../estilos/cards.css";


function ListaProductos() {

    const [datosProductos, setDatosProductos] = useState([{}])
    
    useEffect(
        () => {
        fetch("http://localhost:8080/comprar")
        .then(
            (response) => (response.json())
        )
        .then(
            (response) => {
                setDatosProductos(response)
            }
            
        )
    }, []
    )
    
    return (
        <>
            <div>
                <UserHeader/>
            </div>
           
            <div className="product-container">
                <StockProductos productos = {datosProductos} />
            </div>

            <div className="footer-container">
                <h1 className="foot-text">Copyrigth</h1>
            </div>
        </>
    )
}

export default ListaProductos;