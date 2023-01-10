
const flight = require('../models/adminModel');
const { query } = require('../routes/db-config');



const Flight_Details_Members = async (req,res) => {

    const{flight_id} = req.query;
    
    let data_members = await flight.Flight_Details_Members(flight_id);
    let data_guests = await flight.Flight_Details_Guest(flight_id);

    

    return res.json({status:1,flightdataMembers:data_members,flightdataGuest:data_guests});

}

module.exports = Flight_Details_Members;