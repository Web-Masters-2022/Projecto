// Modules

const express = require('express');
const cors = require('cors');
const body_parse = require('body-parser');
const path = require('path');
const ventasService = require('./ventasService');

// Iniciando express

const app = express();
const port = 8082;


app.use(cors());
app.use(body_parse.json());

// Crud

app.get("/ventas", (request, response) => {
    response.send(ventasService.ventasGetExports());
})

app.post("/ventas", (request, response) => {
    response.send(ventasService.ventasSetExports(request.body));
})


app.listen(port, () => {
    console.log("Corriendo...");
})

