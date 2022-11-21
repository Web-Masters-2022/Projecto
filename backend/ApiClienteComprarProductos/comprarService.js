let getMongo = require('./mongodb.js')
let request = require("axios");

async function getConexiones() {
    const nameDb = "productos"
    const client = await getMongo.getClientnExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    return { collection, client }
}

const productosGet = async () => {
    const { collection, client } = await getConexiones();
    let productos = await collection.find({});
    let productosList = await productos.toArray();
    await getMongo.closeClientExport(client);
    return productosList;
   
    
}



const añadirACarrito = async (producto) => {
    const nameDb = "carrito"
    const client = await getMongo.getClientnExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    
    await collection.insertOne(producto);
    await getMongo.closeClientExport(client);

    return "Producto añadido";
    
    

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

// Sincronizar los json

const actualizarStock = (productoParaActualizar) => {
    for(let i = 0; i < productos.length; i++) {
        if (productoParaActualizar.id === productos[i].id) {
            productos[i] = productoParaActualizar;
            return productos;
        }
    }

    productos.push(productoParaActualizar);
    return productos;


}




module.exports.productosGetExports = productosGet;
module.exports.añadirACarritoExports = añadirACarrito;
module.exports.productosCompradosExports = productosComprados;
module.exports.actualizarStockExports = actualizarStock;