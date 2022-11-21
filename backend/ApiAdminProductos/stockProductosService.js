// No se necesita por mongoDb, let productos = require('./productos.json');
let getMongo = require("./mongodb.js")
let request = require("axios");


async function getConexiones() {
    const nameDb = "productos"
    const client = await getMongo.getClientnExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    return { collection, client }
}


const getProductos = async () => {
    const { collection, client } = await getConexiones();
    let productos = await collection.find({});
    let productosList = await productos.toArray();
    await getMongo.closeClientExport(client)
    
    return productosList;
}

const agregarProducto = async (nuevoProducto) => {

    const { collection, client } = await getConexiones()
    await collection.insertOne(nuevoProducto);
    await getMongo.closeClientExport(client);
    return await getProductos();

}

const modificarProducto = async (producto) => {
    const { collection, client } = await getConexiones();
    await collection.updateOne({"_id": producto.id}, {"$set": {
        "imagen": producto.imagen,
        "nombre": producto.nombre,
        "precio": producto.precio,
        "cantidad": producto.cantidad
    }})
    await getMongo.closeClientExport(client);
    return producto;

    
}

const disminuirStock = async (listaProductosComprados) => {
    const { collection, client } = await getConexiones();
    
    for (let i = 0; i < listaProductosComprados.length; i++) {
        let revisarProducto = listaProductosComprados[i];
        await collection.updateOne({"nombreProducto": revisarProducto.nombreProducto}, {"$set": {
            "cantidad": revisarProducto.cantidad - 1
        }})
    }

    await getMongo.closeClientExport(client);
    return "Stock actualizado";

}

module.exports.getProductosExports = getProductos;
module.exports.modificarProductoExports = modificarProducto;
module.exports.disminuirStockExports = disminuirStock;
module.exports.agregarProductoExports = agregarProducto;