const {MongoClient} = require("mongodb")

const getClient = async (nameDb) =>{
    const url ="mongodb+srv://Webtic2022:vuffufjx72FQjfAz@mintic.1njn0md.mongodb.net/"+nameDb

    const client = new MongoClient(url)
    await client.connect()
    .then(
        (db)=>{
            console.log("Conexion exitosa")
        }
    )
    .catch(
        (error)=>{
            console.log("Error al conectarse a la bd")
        }
    )

    return client

}

const getCollection = async (client, nameDb) =>{

    const db = client.db(nameDb)

    const collection = await db.collection("listaProductos")

    return collection
}

const closeClient = async (client)=>{

    await client.close()

}

module.exports.getCollectionExport = getCollection;
module.exports.getClientnExport = getClient;
module.exports.closeClientExport = closeClient;