let Apadrinados = require("../models/apadrinados");

// Registrar niños Apadrinados
const registrarApadrinados = (req, res) => {
  let params = req.body;
  let apadrinados = new Apadrinados();
  apadrinados.nombres = params.nombres;
  apadrinados.apellidos = params.apellidos;
  apadrinados.edad = params.edad;
  apadrinados.genero = params.genero;
  apadrinados.fecha_de_nacimiento = params.fecha_de_nacimiento;
  apadrinados.fecha_apadrinamiento = params.fecha_apadrinamiento;
  apadrinados.save((err, saveApadrinados) => {
    if (err) {
      res.status(500).send({ mensaje: "Error al conectar con el Servidor" });
    } else {
      if (saveApadrinados) {
        res.status(200).send({ Apadrinados: saveApadrinados });
      } else {
        res
          .status(401)
          .send({ mensaje: "No se puedo registrar al Apadrinado" });
      }
    }
  });
};

/* // Buscar niños Apadrinados
const buscarApadrinados = (req, res) => {
  let id = req.params["id"];
  Apadrinados.findById({ _id: id }, (err, datosApadrinados) => {
    if (err) {
      res.status(500).send({ mensaje: "Error al conectar al Servidor" });
    } else {
      if (datosApadrinados) {
        res.status(200).send({ apadrinados: datosApadrinados });
      } else {
        res.status(401).send({ mensaje: "El Niño apadrinado no Existe" });
      }
    }
  });
}; */

// Listar niños Apadrinados
const listarApadrinados = (req, res) => {
  let nombres = req.params["nombres"];
  Apadrinados.find(
    { nombres: new RegExp(nombres, "i") },
    (err, datosApadrinados) => {
      if (err) {
        res.status(500).send({ mensaje: "Error al conectar al servidor" });
      } else {
        if (datosApadrinados) {
          res.status(200).send({ apadrinados: datosApadrinados });
        } else {
          res.status(401).send({ mensaje: "No hay Niños Apadrinados" });
        }
      }
    }
  );
};

/* // Editar niños Apadrinados
const editarApadrinados = (req, res) => {
  let id = req.params["id"];
  let params = req.body;

  Apadrinados.findByIdAndUpdate(
    { _id: id },
    { nombres: params.nombres, apellidos: params.apellidos, edad: params.edad },
    (err, datosApadrinados) => {
      if (err) {
        res.status(500), send({ message: "Error en el servidor" });
      } else {
        if (datosApadrinados) {
          res.status(200).send({ apadrinados: datosApadrinados });
        } else {
          res
            .status(403)
            .send({ message: "La categoria no se pudo Actualizar" });
        }
      }
    }
  );
}; */

/* // Elinimar niños Apadrinados
const eliminarApadrinados = (req, res) => {
  let id = req.params["id"];
  Apadrinados.findByIdAndRemove({ _id: id }, (err, datosApadrinados) => {
    if (err) {
      res.status(500).send({ message: "Error en el servidor" });
    } else {
      if (datosApadrinamientos) {
        res.status(200).send({ Apadrinados: datosApadrinados });
      } else {
        res.status(403).send({ message: "El Apadrinado no se pudo eliminar" });
      }
    }
  });
}; */

module.exports = {
  registrarApadrinados,
  /* buscarApadrinados, */
  listarApadrinados,
/* editarApadrinados,
  eliminarApadrinados, */
};
