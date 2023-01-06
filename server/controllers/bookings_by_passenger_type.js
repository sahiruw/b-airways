const admin = require("../models/adminModel");

const Bookings_by_Passenger_type = async (req,res) => {
    const data = await admin.Bookings_by_Passenger_type();
    return res.json({status:1,data:data});
}

module.exports = Bookings_by_Passenger_type;