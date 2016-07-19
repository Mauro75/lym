// 1. Rescatando el argumento que es
// pasado al script
var ageArgument = +process.argv[2];

// 2. Hay que conectarnos a la base de datos
// Paso 1. Cargar el driver en nuestro script
var mongodb = require('mongodb');
// Paso 2. El driver de Mongodb nos proporciona
// un cliente, por lo que lo extraemos de 
// la libreria
var mongoClient = mongo.mongoClient;
// Paso 3. Conectamos el cliente con la base
// de datos
mongoClient.connect("mongodb://127.0.0.1:27017/learnyuomongo",
function(err, db) {
    // Verificando si hubo u erroe en la
    // conexion
    if(err){
        console.log("> Error al conectarse a: "+
        'mongodb://127.0.0.1:27017/learnyuomongo');
        throw err;
    }
    // Obteniendo la coleccion
    var parrotsCollection = db.collection('parrots');
    // Aplicando un query sobre la coleccion
    parrotsCollection.find({
            age : {$gt : ageArgument}
        });
        //
        objetoResultado.toArray(function(err, docs) {
            console.log(docs);
            db.close();
        });
    
});