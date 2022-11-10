import React, { useState } from "react";
import Header from "../components/header";
import StockProductos from "../components/productCard";
import products from "../data/productStock";
import "../estilos/header.css";
import "../estilos/cards.css";


function Productos() {
    

    return (
        <>
            <div>
                <Header/>
            </div>

            <div className="product-container">
                <StockProductos productos = {products} />
            </div>
            

            <div className="footer-container">
                <h1 className="foot-text">Copyrigth</h1>
            </div>
        </>
    )
}

export default Productos;