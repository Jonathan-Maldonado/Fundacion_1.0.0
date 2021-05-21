let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// Schema User
let chicosApSchema = Schema({
    nombres: String,
    apellidos: String,
    edad: Number,
    imagen: String,
    descripcion: String,
    fechaRegistro: { type: Date, default: Date.now}
});

// Exports
module.exports = mongoose.model ("chicosAp", chicosApSchema);