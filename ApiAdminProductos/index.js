// Modules

const express = require('express');
const cors = require('cors');
const body_parse = require('body-parser');
const path = require('path');
const productosService = require('./stockProductosService');



// Iniciando express

const app = express();
const port = 8084;


app.use(cors());
app.use(body_parse.json());


app.get("/productos", (request, response) => {
    response.send(productosService.getProductosExports());
})

app.post("/productos", (request, response) => {
    response.send(productosService.agregarProductoExports(request.body));
})

app.patch("/productos", (request, response) => {
    response.send(productosService.disminuirStockExports(request.body))
})

app.put("/productos", (request, response) => {
    response.send(productosService.modificarProductoExports(request.body));
})

app.listen(port, () => {
    console.log("Corriendo...");
})
