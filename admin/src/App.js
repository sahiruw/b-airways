import Login from "./components/login";
import FlightSchedule from "./components/schedule_flight";
import OffCanvasMenue from "./components/SideNavBar";
import Action1 from "./components/Action1";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PassengerDetails from "./components/passenger_detaiils";
import Bookings_by_Passenger_Type from "./components/bookings_by_passenger_type";
import Past_Flights from "./components/past_flights";
import background from "./b7.jpg";


const router = createBrowserRouter([

  {
    path: "/",
    element : <Login />,
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

  


]);

function App() {
 
  return (
    
      <div className="App">
      {/* <PassengerDetails /> */}
      {/* <Action1 /> */}
      /* <OffCanvasMenue /> 
      {/* <FlightSchedule /> */}
      <RouterProvider router={router} /> 
    </div>
    
    
  );
}

export default App;
