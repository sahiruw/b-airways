const admin = require("../models/adminModel");


const Action1 = async (req,res) =>{
    const{end_destination,time_range_from,time_range_to} = req.query;
   

    const data = await admin.Action1(end_destination,time_range_from,time_range_to);

    return res.json({status:1,data:data});
}

module.exports = Action1;

