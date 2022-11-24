const express = require("express")
const router = express.Router()

const register = require("./register")
const login = require("./login")
const isLogged = require("./islogged")
const logout = require("./logout")

router.post("/register", register)
router.post("/login", login)
router.get("/islogged", isLogged)
router.post("/logout", logout)

module.exports = router