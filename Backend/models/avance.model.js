const mongoose = require('mongoose');

const avance_schema = new mongoose.Schema({
    id_avance: {
        type: Number,
    },
    id_proyecto: {
        type: Number,
    },
    fecha_avance: {
        type: Date,
    },
    descripcion: [{ "Aportes": String, "Observaciones": String }]
});

module.exports = mongoose.model('avance', avance_schema);