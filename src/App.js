import React from "react";
import Ventas from "./vistas/ventas";
import Modificar from "./vistas/EditarProductos";
import Productos from "./vistas/productos";
import ListaProductos from "./vistas/productosCliente";
import Carrito from "./vistas/carrito";
import productsCarrito from "./data/productsCarrito";
import productsStock from "./data/productStock";
import productsSold from "./data/productsSold";
import {Routes, Route} from "react-router-dom";

function App() {

  if(localStorage.getItem("stock")==null){
    localStorage.setItem("stock",JSON.stringify(productsStock))
 }

 if(localStorage.getItem("carrito")==null){
  localStorage.setItem("carrito",JSON.stringify(productsCarrito))
}

  if(localStorage.getItem("ventas")==null) {
    localStorage.setItem("ventas", JSON.stringify(productsSold))
  }



  return (
    <>
      <Routes>
        <Route path="/ventas" element={<Ventas/>}/>
        <Route path="/comprar" element={<ListaProductos/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/modificar" element={<Modificar/>}/>
      </Routes>
    </>
  );
}

export default App;
