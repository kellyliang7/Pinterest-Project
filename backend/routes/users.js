var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const passport = require('../auth/local');
const { loginRequired } = require('../auth/helpers')

const { createUser, logoutUser, loginUser, isLoggedIn } = require("../db/queries/usersQueries");

router.post("/new", createUser);
router.post("/login", passport.authenticate("local", {}), loginUser);
router.get("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;
