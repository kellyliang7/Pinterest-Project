const express = require("express");
const router = express.Router();
const { getAllPins } = require("../db/queries/pinsQueries");

router.get("/", getAllPins);

module.exports = router; 