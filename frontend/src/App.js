import React from "react";
import Login from "./vistas/loginPage";
import Ventas from "./vistas/ventas";
import Modificar from "./vistas/EditarProductos";
import Productos from "./vistas/productos";
import ListaProductos from "./vistas/productosCliente";
import Carrito from "./vistas/carrito";
import {Routes, Route} from "react-router-dom";

function App() {




  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
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
