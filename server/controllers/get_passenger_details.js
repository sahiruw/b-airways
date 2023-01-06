const admin = require("../models/adminModel");


const GetPassengerDetails = async (req,res) => {
    const{date} = req.query;
    const below_18_data = await admin.Members_Below_18(date);
    const above_18_data = await admin.Members_Above_18(date);

    console.log(below_18_data);
    console.log(above_18_data);

    return res.json({statues : 1,below_18_members:below_18_data,above_18_members:above_18_data});
}

module.exports = GetPassengerDetails;