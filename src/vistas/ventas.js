import React, { useState } from "react";
import Header from "../components/header";
import ResponsiveTable from "../components/responsiveTable";
import data from "../data/productsSold";
import "../estilos/tables.css"


function Ventas() {
    const datosProductsSoldJSON = JSON.parse(localStorage.getItem("ventas"))
    const [datosVentas, setDatosVentas] = useState(datosProductsSoldJSON);

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