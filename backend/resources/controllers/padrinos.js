let Padrino = require("../models/padrinos");


// Reg Padrinos
const registrarPadrino = (req, res) => {
  let params = req.body;
  let padrino = new Padrino();

  if (params.nombres && params.apellidos && params.idNiñoApadrinado) {
    padrino.nombres = params.nombres;
    padrino.apellidos = params.apellidos;
    padrino.idNiñoApadrinado = params.idNiñoApadrinado;
    padrino.save((err, datosPadrino) => {
      if (err) {
        res.status(500).send({ message: "Error al conectar al servidor" });
      } else {
        if (datosPadrino) {
          res.status(200).send({ padrino: datosPadrino });
        } else {
          res.status(401).send({ message: "No se pudo registrar al padrino" });
        }
      }
    });
  } else {
    res.status(401).send({ message: "Faltaron algunos Datos" });
  }
};

// Buscar Padrinos
const buscarPadrinos = (req, res) => {
  let id = req.params["id"];
  padrinos.findById({ _id: id }, (err, datosPadrino) => {
    if (err) {
      res.status(500).send({ mensaje: "Error al conectar al Servidor" });
    } else {
      if (datosPadrino) {
        res.status(200).send({ Padrino: datosPadrino });
      } else {
        res.status(401).send({ mensaje: "El Niño apadrinado no Existe" });
      }
    }
  });
};

// consultar padrins
const listarPadrinos = (req, res) => {
  let nombres = req.params["nombres"];
  Padrino.find({ nombres: new RegExp(nombres, "i") })
    .populate("idPadrino")
    .exec((err, datosPadrino) => {
      if (err) {
        res.status(500).send({ message: "Error en el Servidor" });
      } else {
        if (datosPadrino) {
          res.status(200).send({ producto: datosPadrino });
        } else {
          res
            .status(400)
            .send({ message: "No hay ningun Niño con ese Nombre" });
        }
      }
    });
};


// Editar Padrinos
const editarPadrinos = (req, res) => {
  let id = req.params["id"];
  let params = req.body;
  padrinos.findByIdAndUpdate(
    { _id: id },
    {
      nombres: params.nombres,
      apellidos: params.apellidos /*  edad: params.edad  */,
    },
    (err, datosPadrino) => {
      if (err) {
        res.status(500), send({ message: "Error en el servidor" });
      } else {
        if (datosPadrino) {
          res.status(200).send({ padrino: datosPadrino });
        } else {
          res
            .status(403)
            .send({ message: "La categoria no se pudo Actualizar" });
        }
      }
    }
  );
};

// Elinimar Padrinos
const eliminarPadrinos = (req, res) => {
  let id = req.params["id"];
  Padrino.findByIdAndRemove({ _id: id }, (err, datosPadrino) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (datosPadrino) {
        res.status(200).send({ Padrino: datosPadrino });
      } else {
        res.status(403).send({ message: "El Apadrinado no se pudo eliminar" });
      }
    }
  });
};

// Exprt
module.exports = {
  registrarPadrino,
  listarPadrinos,
  buscarPadrinos,
  editarPadrinos,
  eliminarPadrinos,
};
