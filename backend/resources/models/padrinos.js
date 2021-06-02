let mongoose = require("mongoose");
let Schema = mongoose.Schema;
// Schema Padrinos
let padrinosSchema = Schema({
  nombres: String,
  apellidos: String,
  idNiñoApadrinado: String,
  fechaRegistro: { type: Date, default: Date.now },
});

// Exports
module.exports = mongoose.model("padrinos", padrinosSchema);
