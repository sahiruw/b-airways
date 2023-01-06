import Login from "./components/login";
import FlightSchedule from "./components/schedule_flight";
import OffCanvasMenue from "./components/SideNavBar";

import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([

  {
    path: "login",
    elemnt : <Login />,
  },
  {
    path: "schedule",
    elemnt : <FlightSchedule />,
  }
  


]);

function App() {
 
  return (
    <div className="App">
      <OffCanvasMenue />
      <FlightSchedule />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
