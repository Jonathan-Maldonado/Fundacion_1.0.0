let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// Schema padrinos
let apadrinadosSchema = Schema({
  nombres: String,
  apellidos: String,
  edad: Number,
  genero: String,
  fecha_de_nacimiento: Date,
  fecha_apadrinamiento: Date,
  fechaRegistro:{type: Date, default: Date.now}
});
// Exports
module.exports = mongoose.model ("apadrinados", apadrinadosSchema);
