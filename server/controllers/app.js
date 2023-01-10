const express = require("express");
const router = express.Router();

const register = require("./register");
const login = require("./login");
const isLogged = require("./islogged");
const logout = require("./logout");
const show_departure = require("./departure_place");
const getAircraftDetailsByID = require("./getAircraftDetailsByID");
const getReservedSeats = require("./getReservedSeats");
const getuserbyusername = require("./getuserbyusername");
const Flights = require("./search");
const RecentFlights = require("./recent_flights");
const Booking = require("./addBooking");
//const AdminLogin = require("./adminLogin");
const Schedule = require("./schedule_flight");
const GetStaff = require("./get_all_staff_members");
const Action1 = require("./action1");
const Pssenger_Details = require("./get_passenger_details");
const Bookings_by_Passenger_type = require("./bookings_by_passenger_type");
const Past_Flights = require("./past_flights");
const DetailsforBookingConfim = require("./detailsforBookingConfim");
const AdminLogin = require("./adminLogin");
const Flight_Details_Members = require("./Member_Flight_Details");


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/book", Booking);
router.post("/schedule", Schedule);
router.post("/getConfirmDetails",DetailsforBookingConfim)

router.get("/isLogged", isLogged);
router.get("/departure", show_departure);
router.get("/getAircraftDetailsByID", getAircraftDetailsByID);
router.get("/getReservedSeats", getReservedSeats);
router.get("/getuserbyusername", getuserbyusername);
router.get("/Flights",Flights)
router.get("/RecentFlights",RecentFlights);
router.get("/GetStaff",GetStaff);
router.get("/Action1",Action1);
router.get("/Passenger_Details",Pssenger_Details);
router.get("/Bookings_by_Passenger_type",Bookings_by_Passenger_type);
router.get("/Past_Flights",Past_Flights);
router.get("/adminLogin",AdminLogin);
router.get("/Flight_Details_Members",Flight_Details_Members )


module.exports = router;
