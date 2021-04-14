//se importa mongoose
const mongoose = require ('mongoose');

//conectarse a la base de datos
const URI = 
process.env.MONGODB_URI ?
process.env.MONGODB_URI :
'mongodb://localhost/databaserandom'

//configuracion de mongoose
mongoose.connect( URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

//defnir una constante con la base de datos
const connection = mongoose.connection;

//testear coneccion exitosa
connection.once('open', () => {
    console.log('DB is connected')
})