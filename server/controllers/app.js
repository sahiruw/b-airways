const express = require("express")
const router = express.Router()

const register = require("./register")
const login = require("./login")
const isLogged = require("./islogged")
const logout = require("./logout")
const showFlight = require("./departure_place")
const Flights = require("./search")

router.post("/register", register)
router.post("/login", login)
router.get("/isLogged", isLogged)
router.post("/logout", logout)
router.get("/departure",showFlight)
router.get("/Flights",Flights)

module.exports = router
