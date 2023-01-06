
const admin = require("../models/adminModel");


const GetStaff = async(req,res) => {

    const staff = await admin.getStaff();
    return res.json({status:1,data:staff});

}

module.exports = GetStaff;
