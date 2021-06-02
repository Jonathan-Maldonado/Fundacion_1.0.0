let express = require("express");
let Usuario = require("../controllers/usuario");
let api = express.Router();

// Servicio POST
api.post("/registrarUsuario", Usuario.registrarUsuario);
api.post("/login", Usuario.login);

// Exports
module.exports = api;
