import React from "react";
import MiniDrawer from "../components/drawer";
import { useLocation } from "react-router-dom";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import FlightSchedule from "../components/schedule_flight";
import OffCanvasMenue from "../components/SideNavBar";
import Action1 from "../components/Action1";
import PassengerDetails from "../components/passenger_detaiils";
import Bookings_by_Passenger_Type from "../components/bookings_by_passenger_type";
import Past_Flights from "../components/past_flights";
import Logo from "../components/Logo.png";


const router = createBrowserRouter([
    
    {
        path : "start",
        element : <Start />
    },
    {
        path: "schedule",
        element : <FlightSchedule />,
      },
      {
        path : "action1",
        element : <Action1 />
      },
      {
        path : "bookings_by_passenger_type",
        element : <Bookings_by_Passenger_Type/>
      },
      {
        path : "past_flights",
        element : <Past_Flights/>
      }
])

function Start(){
    const location = useLocation();
    console.log(location.state.useMail);
    return(
        <div>
            
            {/* <OffCanvasMenue mail = {location.state.useMail}/> */}
            <MiniDrawer Name = {location.state.useMail}/>
            <img src={Logo} alt="Logo" style={{width: "1000px", height: "500px",marginLeft:260}}/> 
            
        </div>
    )
}

export default Start;