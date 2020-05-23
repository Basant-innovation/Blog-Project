const jwt = require("jsonwebtoken");
const { tokenSecret } = require("../config");

const auth = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verfied = jwt.verify(token, tokenSecret);
    req.user = verfied;
    next();
  } catch (err) {
    res.status(400).send("Invaled token");
  }
};

module.exports = auth;
