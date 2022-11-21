import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import "../estilos/cards.css";


/* Genera la carta con la información del producto */

function BasicExample({product}) {
  return (
    <Card style={{ width: '18rem', height: "300px"}}>
      <div className='icon'>
       <img src={`${product.imagen}`}/>
      </div>
      <Card.Body>
        <Card.Title style={{ fontSize: "1.1em", textAlign: "center"}}>{product.nombreProducto}</Card.Title>
        <Card.Text style={{ fontSize: "0.3em", textAlign: "center"}}>
          <h1>${product.precio}</h1>
          <h1>Stock: {product.cantidad}</h1>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function StockProductos({productos}) {
    const cards = [];
   
    productos.forEach((product) => {
        cards.push(<BasicExample product = {product} />)
    }
    )

    return (
        <>
            {cards}
        </>
    )

}

export default StockProductos;