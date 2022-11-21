// Modules

const express = require('express');
const cors = require('cors');
const body_parse = require('body-parser');
const path = require('path');
const productosService = require('./comprarService');

// Iniciando express

const app = express();
const port = 8080;


app.use(cors());
app.use(body_parse.json());

// Crud

app.get("/comprar", async (request, response) => {
  response.send(await productosService.productosGetExports())
})


app.post("/comprar", async (request, response) => {
  response.send(await productosService.añadirACarritoExports(request.body));
})

app.patch("/comprar", async (request, response) => {
  response.send(await productosService.productosCompradosExports(request.body));
})

app.put("/comprar", async (request, response) => {
  response.send(await productosService.actualizarStockExports(request.body))
})




app.listen(port, () => {
    console.log("Corriendo...");
})