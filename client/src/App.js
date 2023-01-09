import NavBar from "./components/NavBar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import HomeScreen from "./screens/HomeScreen";
import Register from "./components/register";
import LogIn from "./components/login"
import Booking from "./components/booking/booking"
import SearchBar from "./components/flightSearchBar";
import Table from "./screens/Table";
import Footer from "./components/footer";
import UnderConstruction from "./screens/under_construction";

const router   = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },

  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "booking/",
    element: <Booking />,
  },
  {
    path : "search",
    element : <SearchBar />
  },
  {
    path: "table",
    element: <Table />
  },
  {
    path : "underconstruction",
    element : <UnderConstruction />
  }
]);

function App() {
  

  return (
    // style={{backgroundColor:"#c3e7e3"}}
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
