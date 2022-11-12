let productos = require('./productos.json');
let request = require("axios");


const getProductos = () => {
    return productos;
}

const agregarProducto = (nuevoProducto) => {

    for (let i = 0; i < productos.length; i++){
        if(productos[i].id === nuevoProducto.id){
            return "Este producto ya existe";
        }
    } 

    productos.push(nuevoProducto);
    
    return productos;
}

const modificarProducto = (producto) => {
    

    for(let i = 0; i < productos.length; i++) {

        if (producto.id === productos[i].id) {
            productos[i] = producto;
            
        }
    }

    return productos;
}

const disminuirStock = (listaProductosComprados) => {
    for(i = 0; i < listaProductosComprados.length; i++) {
        for(j = 0; j < productos.length; j++) {
            if(listaProductosComprados[i].id === productos[j].id) {
                productos[j].cantidad -= 1;
            }
        }
    }

    return productos;
}

module.exports.getProductosExports = getProductos;
module.exports.modificarProductoExports = modificarProducto;
module.exports.disminuirStockExports = disminuirStock;
module.exports.agregarProductoExports = agregarProducto;