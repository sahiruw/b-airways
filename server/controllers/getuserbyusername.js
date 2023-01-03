const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const user = require("../models/userModel");


const getuserbyusername = async(req,res) => {
    const userData = await user.getUserbyUsername(req.query.email);
    if (userData[0])res.json({status:1,data:userData[0]});
    else res.json({status:0});
}



module.exports = getuserbyusername;