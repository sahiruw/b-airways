const moment = require("moment");
const flight = require('../models/adminModel');
const { query } = require('../routes/db-config');



const Flight_Details_Members = async (req,res) => {

    const{flight_id} = req.query;
    
    let data_members = await flight.Flight_Details_Members(flight_id);
    let data_guests = await flight.Flight_Details_Guest(flight_id);

   

    let member_details_above18 = [];
    let member_details_below18 = [];
    let guest_details_above18 = [];
    let guest_details_below18 = [];

    //pushing details of members to the relevent lists
    for (let i = 0; i < data_members.length; i++) {
        let A = moment();
        let B = moment(data_members[i].member_bday);
        let age = A.diff(B, "years"); 
        if (age >= 18) {
          data_members[i].age = age;
          member_details_above18.push(data_members[i]);
        }
        if (age < 18) {
          data_members[i].age = age;
          member_details_below18.push(data_members[i]);
        }
      }

      //pushing details of the guests to the relevent lists
      for (let i = 0; i < data_guests.length; i++) {
        let A = moment();
        let B = moment(data_guests[i].guest_bday);
        let age = A.diff(B, "years"); // => 1
        if (age >= 18) {
          data_members[i].age = age;
          guest_details_above18.push(data_guests[i]);
        }
        if (age < 18) {
          data_members[i].age = age;
          guest_details_below18.push(data_guests[i]);
        }
      }

      console.log(member_details_above18);
      console.log(member_details_below18);
      console.log(guest_details_above18);
      console.log(guest_details_below18);
    

    return res.json({status:1,member_details_above18:member_details_above18,member_details_below18:member_details_below18,guest_details_above18:guest_details_above18,guest_details_below18:guest_details_below18});

}

module.exports = Flight_Details_Members;