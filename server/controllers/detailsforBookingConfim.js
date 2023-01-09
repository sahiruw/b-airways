const flight = require("../models/flightModel");


const detailsforBookingConfim = async(req,res) => {
    console.log("HI WHOTTHO")
    const flightDetails = await flight.getFlightDetailsByID(req.query.flightID);
    let ids = [];
    console.log(flightDetails);
    // res.json({status:1, data:ids});
}



module.exports = detailsforBookingConfim;