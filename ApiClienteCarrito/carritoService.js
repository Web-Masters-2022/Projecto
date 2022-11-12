let productosCarrito = require('./carrito.json');
let request = require("axios");

const productosCarritoGet = () => {
    totalCompra = 0;
    productosCarrito.forEach(producto => {
        totalCompra += producto.precio;
    })
    return {productosCarrito, totalCompra};
}

const carritoSet = (producto) => {
    productosCarrito.push(producto);
    return productosCarrito;
}

const carritoDelete = () => {
    productosCarrito.length = 0;
    return productosCarrito;
}

const confirmarCompra = async () => {

    const ventaConfirmada = request.post("http://localhost:8082/ventas", productosCarrito);
    const stockActualizado = request.patch("http://localhost:8080/comprar", productosCarrito);
    const stockActualizadoEnBodega = request.patch("http://localhost:8084/productos", productosCarrito);
    const carritoEliminado = request.delete("http://localhost:8081/carrito")

    await request.all([ventaConfirmada, stockActualizado, carritoEliminado, stockActualizadoEnBodega])
    .then(
        (res)=>{
            console.log(res);
        })
        .catch(
            (res)=>{
                console.log(res)
            }
        )
    
}

module.exports.productosCarritoGetExports = productosCarritoGet;
module.exports.carritoSetExports = carritoSet;
module.exports.carritoDeleteExports = carritoDelete;
module.exports.confirmarCompraExports = confirmarCompra;