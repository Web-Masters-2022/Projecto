import React, { useState, useEffect } from "react";
import Header from "../components/header";
import ResponsiveTable from "../components/responsiveTable";
import data from "../data/productsSold";
import "../estilos/tables.css"


function Ventas() {

    const [datosVentas, setDatosVentas] = useState([{}]);

    useEffect(
        () => {
        fetch("http://localhost:8082/ventas")
        .then(
            (response) => (response.json())
        )
        .then(
            (response) => {
                setDatosVentas(response)
            }
            
        )
    }, []
    )

    console.log(datosVentas)
    return (
        <>
             
            <div>
                <Header/>
            </div>

            <div className="max-container">
                <ResponsiveTable products = {datosVentas}/>
                <div>
                    <img id="table-img-ventas" src="/headPhones.jpg" alt="Motorola Headphones"></img>
                </div>
            </div>

            <div className="footer-container">
                <h1 className="foot-text">Copyrigth</h1>
            </div>
        </>
        
    );
}

export default Ventas;