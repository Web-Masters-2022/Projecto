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


app.get("/productos", async (request, response) => {
    response.send(await productosService.getProductosExports());
})

app.post("/productos", async (request, response) => {
    response.send(await productosService.agregarProductoExports(request.body));
})

app.patch("/productos", async (request, response) => {
    response.send(await productosService.disminuirStockExports(request.body))
})

app.put("/productos", async (request, response) => {
    response.send(await productosService.modificarProductoExports(request.body));
})

app.listen(port, () => {
    console.log("Corriendo...");
})


