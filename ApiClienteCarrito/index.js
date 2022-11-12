// Modules

const express = require('express');
const cors = require('cors');
const body_parse = require('body-parser');
const path = require('path');
const carritoService = require('./carritoService');

// Iniciando express

const app = express();
const port = 8081;


app.use(cors());
app.use(body_parse.json());

// Crud

app.get("/carrito", (request, response) => {
    console.log(request);
    response.send(carritoService.productosCarritoGetExports());
})

app.post("/carrito", (request, response) => {
    if (Object.keys(request.body).length === 0) {
        response.send(carritoService.confirmarCompraExports());
     } else {
        response.send(carritoService.carritoSetExports(request.body));
    }
    
})

app.delete("/carrito", (request, response) => {
    response.send(carritoService.carritoDeleteExports());
})

app.listen(port, () => {
    console.log("Corriendo...");
})