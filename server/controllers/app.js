const express = require("express");
const router = express.Router();

const register = require("./register");
const login = require("./login");
const isLogged = require("./islogged");
const logout = require("./logout");
const showFlight = require("./departure_place");
const getAircraftDetailsByID = require("./getAircraftDetailsByID");
const getReservedSeats = require("./getReservedSeats");

router.post("/register", register);
router.post("/login", login);
router.get("/isLogged", isLogged);
router.post("/logout", logout);
router.get("/departure", showFlight);
router.get("/getAircraftDetailsByID", getAircraftDetailsByID);
router.get("/getReservedSeats", getReservedSeats);

module.exports = router;
