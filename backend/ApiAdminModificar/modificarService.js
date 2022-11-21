//let productos = require('../ApiAdminProductos/productos.json')
let getMongo = require("./mongodb")
let request = require("axios");
const { response } = require('express');

async function getConexiones() {
    const nameDb = "productos"
    const client = await getMongo.getClientnExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    return { collection, client }
}

const getProductos = async () => {
    const {collection, client} = await getConexiones();
    let productos = await collection.find({});
    let productosList = await productos.toArray();
    await getMongo.closeClientExport(client);
    
    return productosList
}


const enviarModificacion = async (productoAModificar) => {
    const { collection, client } = await getConexiones();
    await collection.updateOne({"_id": productoAModificar.id}, {"$set": {
        "imagen": productoAModificar.imagen,
        "nombre": productoAModificar.nombre,
        "precio": productoAModificar.precio,
        "cantidad": productoAModificar.cantidad
    }})
    await getMongo.closeClientExport(client);
    return productoAModificar;
    
}

const agregarProducto = async (nuevoProducto) => {
    const { collection, client } = await getConexiones();
    await collection.findOneAndUpdate({"_id": nuevoProducto._id}, {"$set":{
        "_id": nuevoProducto._id,
        "imagen": nuevoProducto.imagen,
        "nombre": nuevoProducto.nombre,
        "precio": nuevoProducto.precio,
        "cantidad": nuevoProducto.cantidad
        
    }}, {upsert: true})
    await getMongo.closeClientExport(client)
    return nuevoProducto;
    

}



module.exports.getProductosExports = getProductos;
module.exports.enviarModificacionExports = enviarModificacion;
module.exports.agregandoProductoExports = agregarProducto;