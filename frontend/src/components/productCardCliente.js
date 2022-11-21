import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import datosProductos from "../data/productStock";
//import datosCarrito from "../data/productsCarrito";
import "../estilos/cards.css";


/* Genera la carta con la información del producto */

function BasicExample({product}) {

  

  function add() {
    
    let productoParaEnviar = {
      "imagen": product.imagen,
      "nombreProducto": product.nombreProducto,
      "precio": product.precio,
      "cantidad": product.cantidad
    }

    fetch("http://localhost:8080/comprar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productoParaEnviar)
      }
    )
    alert(`Se añadió al carrito un ${product.nombreProducto}`);

   //window.location.reload();
   
    
  }


  return (
    <Card style={{ width: '18rem', height: "350px"}}>
      <div className='icon'>
        <img src={`${product.imagen}`}/>
      </div>
      <Card.Body>
        <Card.Title style={{ fontSize: "1.1em", textAlign: "center"}}>{product.nombreProducto}</Card.Title>
        <Card.Text style={{ fontSize: "0.3em", textAlign: "center"}}>
          <h1>${product.precio}</h1>
          <h1>Stock: {product.cantidad}</h1>
          <Button variant="info" style={{ textAlign: "center", marginTop: "10px"}} onClick={add}>Comprar</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function StockProductos({productos}) {
    const cards = [];
   
    productos.forEach((product) => {
        cards.push(<BasicExample product = {product} key={product.nombreProducto}/>)
    }
    )

    return (
        <>
            {cards}
        </>
    )

}

export default StockProductos;