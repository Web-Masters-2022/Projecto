import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from "react-bootstrap";

/* Crea las filas de la tabla */

function ProductRow({product}) {

  
    return (
      <tr>
        <td className={"column"}>{product.nombreProducto}</td>
        <td className={"column"}>{1}</td>
        <td className={"column"}>{product.precio}</td>
      </tr>
    );
}


/* Recorre todos los datos, generando un arreglo de filas, también suma el valor de cada venta, para posteriormente
mostrar el total al final de la tabla, después de recorrer cada "venta" se añade una fila en blanco y el total mencionado para darle mejor formato a la tabla. Esta functión también genera la tabla*/

function ProductTable({products}) {
    const rows = [];
    let sumTotal = 0;
  
    products.forEach((product) => {
      rows.push(
        <ProductRow product = {product}/>
      )
      sumTotal += Number(product.valor);
    }
    )
  
    /*rows.push(
      <ProductRow product = {" "} key = {"blankSpace"}/>
    )*/
  
    rows.push(
      <ProductRow product = {{fecha: " ", idVenta: "Total", valor: sumTotal}}/>
    )
    
    return (
      <Table striped bordered hover> 
        <thead>
          <tr>
            <th >Nombre</th>
            <th >Cantidad</th>
            <th >Valor</th>
          </tr>
        </thead>
  
        <tbody>{rows}</tbody>
      </Table>
    )
  }

/* Función que solo cree para enviar la tabla en un div como default */

function ResponsiveTable({products}) {
    return(
      <div className="table-wrapper-ventas">
        <ProductTable products = {products}/>
      </div>
  
    )
  }
  
  
  
  export default ResponsiveTable;