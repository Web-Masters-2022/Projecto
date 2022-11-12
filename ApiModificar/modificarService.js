let productos = require('../ApiAdminProductos/productos.json')
let request = require("axios");
const { response } = require('express');

const getProductos = () => {
    return productos;
}


const enviarModificacion = async (productoAModificar) => {
    const modificarStock = request.put("http://localhost:8084/productos", productoAModificar);
    const modificarStockParaClientes = request.put("http://localhost:8080/comprar", productoAModificar)

    await request.all([modificarStock, modificarStockParaClientes]);
    
}

const agregarProducto = async (nuevoProducto) => {
    const agregandoProducto = request.post("http://localhost:8084/productos", nuevoProducto)
    const agregarProductoParaCliente = request.put("http://localhost:8080/comprar", nuevoProducto)

    await request.all([agregandoProducto, agregarProductoParaCliente]);

}



module.exports.getProductosExports = getProductos;
module.exports.enviarModificacionExports = enviarModificacion;
module.exports.agregandoProductoExports = agregarProducto;