let express = require("express");
let Apadrinado = require("../controllers/apadrinados");
let api = express.Router();

api.post("/apadrinados/registrarPadrino", Apadrinado.registrarApadrinados);
/* api.get("/apadrinados/:id", Apadrinado.buscarApadrinados); */
api.get("/apadrinados/:nombre?", Apadrinado.listarApadrinados);
api.post("/apadrinados/:nombre?", Apadrinado.listarApadrinados);
/* api.put("/apadrinados/editarApadrinados/:id", Apadrinado.editarApadrinados); */
/* api.delete("/apadrinados/eliminarApadrinados/:id",Apadrinado.eliminarApadrinados); */

module.exports = api;
