// var pgp = require("pg-promise")({});
// var connectionString = "postgres://localhost/funterest";
// var db = pgp(connectionString);

const { db } = require('./index.js');

const authHelpers = require("../../auth/helpers");

const createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);
  req.body.age = parseInt(req.body.age);

  req.body.age = req.body.age ? req.body.age : null 

  db.none(
    "INSERT INTO users (email, age, password_digest) VALUES (${email}, ${age}, ${password})", 
    { email: req.body.email, age: req.body.age, password: hash }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
}

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
}

const loginUser = (req, res) => {
  res.json(req.user);
}

const isLoggedIn = (req, res) => {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
}

module.exports = {
  createUser: createUser,
  logoutUser: logoutUser,
  loginUser: loginUser,
  isLoggedIn: isLoggedIn
};