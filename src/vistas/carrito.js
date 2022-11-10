import React, { useState } from "react";
import UserHeader from "../components/userHeader";
import ResponsiveTable from "../components/shoppingCarTable";
import data from "../data/productsCarrito";
import "../estilos/shoppingCart.css";
import { Button } from "react-bootstrap";

function Carrito() {
    
    
    
    const datosCarritoJSON = JSON.parse(localStorage.getItem("carrito"))
    const [datosCarrito, setDatosCarrito] = useState(datosCarritoJSON);

    const datosProductsSoldJSON = JSON.parse(localStorage.getItem("ventas"))
    const [datosVentas, setDatosVentas] = useState(datosProductsSoldJSON);

    function cancelar() {
        window.localStorage.removeItem('carrito');
        alert("Carrito cancelado...")
        window.location.reload();
    }

    function comprar() {
        const ventasFinales = [...datosVentas, ...datosCarrito]
        localStorage.setItem("ventas", JSON.stringify(ventasFinales));
        window.localStorage.removeItem("carrito");
        alert("Gracias por su compra!")
        window.location.reload();
    }

    
    return (
        <>
            <div>
                <UserHeader/>
            </div>

            <div className="body-max-container">
                <ResponsiveTable products = {datosCarrito}/>
            
                

                
            </div>
            <div className="buttonsDiv" style={{textAlign: "center", paddingBottom: "50px"}}>
                <Button variant="info" onClick={comprar} style={{ textAlign: "center", marginTop: "10px"}} >Comprar</Button>
                <Button variant="info" onClick={cancelar} style={{ textAlign: "center", marginTop: "10px", marginLeft: "10px"}}>Cancelar</Button>
            </div>
            

            <div className="footer-container">
                <h1 className="foot-text">Copyrigth</h1>
            </div>
        </>
        
    );
}

export default Carrito;