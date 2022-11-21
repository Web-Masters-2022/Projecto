let getMongo = require('./mongodb.js')
let request = require('axios');

async function getConexiones() {
    const nameDb = "carrito"
    const client = await getMongo.getClientnExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    return { collection, client }
}


const ventasGet = async () => {
    const { collection, client } = await getConexiones();
    let productosVendidos = await collection.find({});
    let productosList = await productosVendidos.toArray();
    await getMongo.closeClientExport(client);

    return productosList;
}

const ventasSet = async (productos) => {
    const { collection, client } = await getConexiones();
    
    /*if (productos.length > 1) {
        await collection.insertMany(productos);
    } else {
        await collection.insertOne(productos);
    }*/
   
    await collection.insertMany(productos);
    
    await getMongo.closeClientExport(client);
    return "productos añadidos a listado ventas"
}


module.exports.ventasGetExports = ventasGet;
module.exports.ventasSetExports = ventasSet;