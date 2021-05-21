/* const chicosAp = require("../models/chicosAp"); */
let ChicosAp = require("../models/chicosAp");
let fs = require("fs");
let path = require("path");
let moment = require("moment");

const registrarchicosAp = (req, res) => {
  let params = req.body;
  let chicosAp = new ChicosAp();

  if (params.nombres && params.apellidos && params.edad && params.descripcion) {
    // ruta img
    let imagenPath = req.files.imagen.path;
    // codigo para la img
    let nameImg = moment().unix();
    // nva Ruta
    var rutaServer = "./uploads/imgchicos/" + nameImg + path.extname(imagenPath).toLowerCase();
    // copi nva Ruta
    fs.createReadStream(imagenPath).pipe(fs.createWriteStream(rutaServer));
    // nombre del archivo en la DB
    let bdImg = nameImg + path.extname(imagenPath).toLowerCase();
    chicosAp.nombres = params.nombres;
    chicosAp.apellidos = params.apellidos;
    chicosAp.edad = params.edad;
    chicosAp.imagen = bdImg;
    chicosAp.descripcion = params.descripcion;

    chicosAp.save((err, datosChicosAp) => {
      if (err) {
        res.status(500).send({
          mensaje: "Error al conectar al servidor",
        });
      } else {
        if (datosChicosAp) {
          res.status(200).send({ chicosAp: datosChicosAp });
        } else {
          res.status(401).send({
            mensaje: "No se pudo registrar el niño",
          });
        }
      }
    });
  } else {
    res.status(401).send({ mensaje: "Falto alguno de los campos" });
  }
};

// Consultamos todas las categorias
const listaChicosAp = (req, res) => {
  let nombre = req.params["nombre"];
  ChicosAp.find({ nombre: new RegExp(nombre, "i") })
    .populate("idCategoria")
    .exec((err, datosChicosAp) => {
      if (err) {
        res.status(500).send({ message: "Error en el servidor" });
      } else {
        if (datosChicosAp) {
          res.status(200).send({ ChicosAp: datosChicosAp });
        } else {
          res
            .status(403)
            .send({ message: "No hay ningun niño con ese nombre" });
        }
      }
    });
};

// Exports
module.exports = {
  registrarchicosAp,
  listaChicosAp,
};
