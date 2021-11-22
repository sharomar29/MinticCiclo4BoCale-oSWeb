const mongoose = require('mongoose');

const proyecto_schema = new mongoose.Schema({
    id_proyecto: {
        type: Number,
    },
    nombre_proyecto: {
        type: String,
    },
    obj_generales: {
        type: String,
    },
    obj_especificos: {
        type: String,
    },
    presupuesto: {
        type: Number,
    },
    fecha_inicio: {
        type: Date,
    },
    fecha_final: {
        type: Date,
    },
    id_lider: {
        type: Number,
    },
    nombre_lider: {
        type: String,
    },
    estado_activo: {
        type: Boolean,
        default: false,
    },
    fase: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model('proyecto', proyecto_schema);