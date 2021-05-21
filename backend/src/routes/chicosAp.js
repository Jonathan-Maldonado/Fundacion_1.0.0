let express = require("express");
let ChicosAp = require("../controllers/chicosAp");
let api = express.Router();
let multipart = require("connect-multiparty");
let path = multipart({ cargas: "./uploads/imgchicos.js" });

// Api generate
api.post("/chicosAp/registrarchicosAp", path, ChicosAp.registrarchicosAp);

// Exports moduls
module.exports = api;
