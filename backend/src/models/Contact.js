//importa Schema y model de la dependencia mongoose
const { Schema, model } = require('mongoose');

//se crea el esquema del formulario de contacto
const contactSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true 
    },

    content:{
        type: String,
        required: true
    },
    
    date:{
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
})

module.exports = model ('Contact', contactSchema)