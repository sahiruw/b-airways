const express = require("express");
const router = express.Router();

const register = require("./register");
const login = require("./login");
const isLogged = require("./islogged");
const logout = require("./logout");
const showFlight = require("./departure_place");
const getAircraftDetailsByID = require("./getAircraftDetailsByID");
const getReservedSeats = require("./getReservedSeats");
const getuserbyusername = require("./getuserbyusername");
const Flights = require("./search");
const RecentFlights = require("./recent_flights");
const Booking = require("./addBooking");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/book", Booking);
router.get("/isLogged", isLogged);

router.get("/departure", showFlight);
router.get("/getAircraftDetailsByID", getAircraftDetailsByID);
router.get("/getReservedSeats", getReservedSeats);
router.get("/getuserbyusername", getuserbyusername);
router.get("/Flights",Flights)
router.get("/RecentFlights",RecentFlights)
module.exports = router;
