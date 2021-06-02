let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// Puerto
let port = process.env.PORT || 3001;

// Lanzador de Servidor
let app = express();

// Routes
let UsuarioRoutes = require("./resources/routes/usuario");
let Apadrinados = require("./resources/routes/apadrinados");
let Padrinos = require("./resources/routes/padrinos");

// Connect Mongo mongodb://localhost:27017/
mongoose.connect(
  "mongodb://localhost:27017/fundacionYJdb",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Servidor DB: ON");
      app.listen(port, function () {
        console.log("Servidor Backend funcionando en el puerto :" + port);
      });
    }
  }
);

// Url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta a Usar
app.use("/api", UsuarioRoutes);
app.use("/api", Apadrinados);
app.use("/api", Padrinos)

// Exports
module.exports = app;
