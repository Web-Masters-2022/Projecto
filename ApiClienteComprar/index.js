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

app.get("/comprar", (request, response) => {
  console.log(request);
  response.send(productosService.productosGetExports());  
})

app.get("/comprar/id", (request, response) => {
  let id = request.query.id;
  console.log(id);
  response.send(productosService.productoIdGetExports(id));
})

app.post("/comprar", (request, response) => {
  response.send(productosService.añadirACarritoExports(request.body));
})

app.patch("/comprar", (request, response) => {
  response.send(productosService.productosCompradosExports(request.body));
})


app.listen(port, () => {
    console.log("Corriendo...");
})