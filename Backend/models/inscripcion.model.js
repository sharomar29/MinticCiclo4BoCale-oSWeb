const mongoose = require('mongoose');

const inscripcion_schema = new mongoose.Schema({
    id_inscripcion: {
        type: Number,
    },
    id_usuario: {
        type: Number,
    },
    id_proyecto: {
        type: Number,
    },
    inscripcion_aceptada: {
        type: Boolean,
        default: false
    },
    fecha_ingreso: {
        type: Date,
    },
    fecha_egreso: {
        type: Date,
    },

});

module.exports = mongoose.model('inscripcion', inscripcion_schema);
