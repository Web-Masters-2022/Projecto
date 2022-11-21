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

app.get("/carrito", async (request, response) => {
    console.log(request);
    response.send(await carritoService.productosCarritoGetExports());
})

app.post("/carrito", async (request, response) => {
    
    response.send(await carritoService.confirmarCompraExports());
    
    
})

app.delete("/carrito", async (request, response) => {
    response.send(await carritoService.carritoDeleteExports());
})

app.listen(port, () => {
    console.log("Corriendo...");
})