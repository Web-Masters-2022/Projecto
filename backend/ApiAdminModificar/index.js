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

app.get("/modificar", async (request, response) => {
    response.send(( await modificarService.getProductosExports()));
   
})

app.post("/modificar", async (request, reponse) => {
    reponse.send(await modificarService.agregandoProductoExports(request.body));
})

app.put("/modificar", async (request, response) => {
    response.send(await modificarService.enviarModificacionExports(request.body));
})

app.listen(port, () => {
    console.log("Corriendo...");
})


