let jwt = require("jwt-simple");
let moment = require("moment");
let secret = "FundacionYJ";

// Export token
exports.createToken = (usuario) => {
  let payload = {
    _id: usuario._id,
    nombres: usuario.nombres,
    apellidos: usuario.apellidos,
    edad: usuario.edad,
    documento: usuario.documento,
    iat: moment().unix(),
  };
  return jwt.encode(payload, secret);
};

