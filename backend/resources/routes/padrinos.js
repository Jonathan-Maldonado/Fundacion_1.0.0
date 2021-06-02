let express = require("express");
let Padrinos = require("../controllers/padrinos");
let api = express.Router();

api.post("/padrinos/registrarPadrinos", Padrinos.registrarPadrino);
api.get("/padrinos/:id", Padrinos.buscarPadrinos);
api.get("/padrinos/:nombre?", Padrinos.listarPadrinos);
api.post("/padrinos/:nombre?", Padrinos.listarPadrinos);
api.put("/padrinos/editarPadrinos/:id", Padrinos.editarPadrinos);
api.delete("/padrinos/eliminarPadrinos/:id", Padrinos.eliminarPadrinos);

module.exports = api;
