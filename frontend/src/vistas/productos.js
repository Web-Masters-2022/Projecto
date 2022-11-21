import React, { useState, useEffect } from "react";
import Header from "../components/header";
import StockProductos from "../components/productCard";
//import products from "../data/productStock";
import "../estilos/header.css";
import "../estilos/cards.css";


function Productos() {

    const [products, setProducts] = useState([{}])
    
    useEffect(
        () => {
        fetch("http://localhost:8084/productos")
        .then(
            (response) => (response.json())
        )
        .then(
            (response) => {
                setProducts(response)
            }
            
        )
    }, []
    )

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