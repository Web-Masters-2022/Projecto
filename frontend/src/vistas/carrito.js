import React, { useState, useEffect } from "react";
import UserHeader from "../components/userHeader";
import ResponsiveTable from "../components/shoppingCarTable";
import data from "../data/productsCarrito";
import "../estilos/shoppingCart.css";
import { Button } from "react-bootstrap";

function Carrito() {
    
    const [datosCarrito, setDatosCarrito] = useState([{}]);

    useEffect(
        () => {
        fetch("http://localhost:8081/carrito")
        .then(
            (response) => (response.json())
        )
        .then(
            (response) => {
                setDatosCarrito(response)
            }
            
        )
    }, []
    )

   

    const datosProductsSoldJSON = JSON.parse(localStorage.getItem("ventas"))
    const [datosVentas, setDatosVentas] = useState(datosProductsSoldJSON);

    function cancelar() {
        
        fetch("http://localhost:8081/carrito",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
        alert("Carrito cancelado...")
        window.location.reload();
    }

    function comprar() {
       fetch("http://localhost:8081/carrito",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosCarrito)
      }
    )
        alert("Gracias por su compra!")
        
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