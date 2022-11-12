// Modules

const express = require('express');
const cors = require('cors');
const body_parse = require('body-parser');
const path = require('path');
const modificarService = require('./modificarService');




// Iniciando express

const app = express();
const port = 8085;


app.use(cors());
app.use(body_parse.json());

app.get("/modificar", (request, response) => {
    response.send((modificarService.getProductosExports()));
})

app.post("/modificar", (request, reponse) => {
    reponse.send(modificarService.agregandoProductoExports(request.body));
})

app.put("/modificar", (request, response) => {
    response.send(modificarService.enviarModificacionExports(request.body));
})

app.listen(port, () => {
    console.log("Corriendo...");
})


