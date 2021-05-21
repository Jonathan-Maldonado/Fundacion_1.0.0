let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// Schema User
let usuarioSchema = Schema({
    nombres: String,
    apellidos: String,
    edad: Number,
    documento: String,
    correo: String,
    pass: String,
    rol: String,
    fechaRegistro: { type: Date, default: Date.now}
});

// Exports
module.exports = mongoose.model ("Usuario", usuarioSchema);