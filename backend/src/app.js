//exportar modulos
const express = require ('express')
const cors = require('cors')

//se requiere express
const app = express()


//listen del servidor
app.set('port', process.env.PORT || 4000)


//middleware
app.use(cors());
//se rewuiere forato json
app.use(express.json())


//routes


module.exports = app;