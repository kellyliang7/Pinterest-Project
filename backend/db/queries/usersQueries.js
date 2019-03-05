// var pgp = require("pg-promise")({});
// var connectionString = "postgres://localhost/funterest";
// var db = pgp(connectionString);

const { db } = require('./index.js');

const authHelpers = require("../../auth/helpers");

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(users => {
      res.status(200).json({
        status: "Success",
        users,
        message: "Received all users"
      });
    })
    .catch(err => {
      return next(err);
    });
};

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
};

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
};

const loginUser = (req, res) => {
  console.log("USER, ", req.user)
  res.json(req.user);
};

const isLoggedIn = (req, res) => {
  if (req.user) {
    res.json({ email: req.user });
  } else {
    res.json({ email: null });
  }
};

const getSingleUser = (req, res, next) => {
  let usersId = parseInt(req.params.id);
  db.one("SELECT * FROM users WHERE id=$1", usersId)
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received one user"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const editUser = (req, res, next) => {
  db.none("UPDATE users SET email ")
}

module.exports = {
  getAllUsers,
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn,
  getSingleUser
};