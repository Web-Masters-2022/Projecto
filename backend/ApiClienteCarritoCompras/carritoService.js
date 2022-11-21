//let productosCarrito = require('./carrito.json');
let getMongo = require('./mongodb.js');
let request = require("axios");

async function getConexiones() {
    const nameDb = "carrito"
    const client = await getMongo.getClientnExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    return { collection, client }
}

const productosCarritoGet = async () => {
    const { collection, client } = await getConexiones();
    let productosEnCarrito = await collection.find({});
    let productosList = await productosEnCarrito.toArray();
    await getMongo.closeClientExport(client);

    
    return productosList;
    
    
    
}

const carritoSet = (producto) => {
    productosCarrito.push(producto);
    return productosCarrito;
}

const carritoDelete = async () => {
    const { collection, client } = await getConexiones();
    await collection.deleteMany({});
    await getMongo.closeClientExport(client);
    return "Compra cancelada..."
}

const confirmarCompra = async () => {
    const { collection, client} = await getConexiones();
    let productosEnCarrito = await collection.find({});
    let productosList = await productosEnCarrito.toArray();
    await getMongo.closeClientExport(client);
    

    let ventas = request.post("http://localhost:8082/ventas", productosList)
    let vaciarCarrito = request.delete("http://localhost:8081/carrito")
    let disminuirStock = request.patch("http://localhost:8084/productos", productosList)

    await request.all([ventas, disminuirStock, vaciarCarrito])
    

    return "Compra realizada"
    
    
}

module.exports.productosCarritoGetExports = productosCarritoGet;
module.exports.carritoSetExports = carritoSet;
module.exports.carritoDeleteExports = carritoDelete;
module.exports.confirmarCompraExports = confirmarCompra;