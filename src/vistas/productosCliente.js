import React, { useState } from "react";
import UserHeader from "../components/userHeader";
import StockProductos from "../components/productCardCliente";
import products from "../data/productStock";
import "../estilos/header.css";
import "../estilos/cards.css";


function ListaProductos() {

    const [datosProductos, setDatosProductos] = useState(products);
    
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