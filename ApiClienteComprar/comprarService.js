let productos = require('./productos.json');
let request = require("axios");

const productosGet = () => {
    return productos;
}

const productoIdGet = (id) => {
    let producto = productos.find(miProducto => miProducto.id === id)
    return producto;
}

const añadirACarrito = async (producto) => {

    const carrito = request.get("http://localhost:8081/carrito")
    
    const productoAñadido = request.post("http://localhost:8081/carrito", producto)

    await request.all([carrito, productoAñadido])
    

}


// Disminuye la cantidad del stock de los productos una vez se confirme la compra del carrito.

const productosComprados = (listaProductosComprados) => {
    for(i = 0; i < listaProductosComprados.length; i++) {
        for(j = 0; j < productos.length; j++) {
            if(listaProductosComprados[i].id === productos[j].id) {
                productos[j].cantidad -= 1;
            }
        }
    }

    return productos;
}

module.exports.productosGetExports = productosGet;
module.exports.productoIdGetExports = productoIdGet;
module.exports.añadirACarritoExports = añadirACarrito;
module.exports.productosCompradosExports = productosComprados;