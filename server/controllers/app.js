const express = require("express")
const router = express.Router()

const register = require("./register")
const login = require("./login")
const isLogged = require("./islogged")
const logout = require("./logout")
const showFlight = require("./departure_place")


// const getUser = require("./getUser")

router.post("/register", register)
router.post("/login", login)
router.get("/islogged", isLogged)
// router.get("/getUser", getUser)
router.post("/logout", logout)
router.get("/departure",showFlight)


module.exports = router
