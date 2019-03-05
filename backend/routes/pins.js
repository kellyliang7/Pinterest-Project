const express = require("express");
const router = express.Router();

const { getAllPins, getSinglePin, getUserPins, createPin, editPin, deletePin, getPinsInBoard } = require("../db/queries/pinsQueries");

router.get("/", getAllPins);
router.get("/:id", getSinglePin);
router.get("/user/:id", getUserPins);
router.post("/", createPin);
router.put("/:id", editPin);
router.delete("/:id", deletePin);

module.exports = router; 