//se quiere el modulo dotenv
require ('dotenv').config()

//se requiere express
const app = require('./app')

//se exporta el archivo database.js
require('./database')

//se conecta el servidor
async function main (){
    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'))
}

main()