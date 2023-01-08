const admin = require("../models/adminModel");

const Past_Flights = async (req,res) => {

    const{start_destination,end_destination} = req.query;
    const data = await admin.Past_Fligts(start_destination,end_destination)

    return res.json({status:1,data:data});
}

module.exports = Past_Flights;