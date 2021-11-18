const mongoose = require('mongoose');

const usuario_squema = new mongoose.Schema({
    id_usuario: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    clave: {
        type: Number,
        required: true,
    },
    tipo_usuario: {
        type: String,
    }
});

module.exports = mongoose.model('usuario', usuario_squema);