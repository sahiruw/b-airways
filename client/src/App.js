import NavBar from "./components/NavBar";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";


import HomeScreen from "./screens/HomeScreen";
import Register from "./components/register";
<<<<<<< HEAD
import LogIn from "./components/login";
import Booking from "./components/booking/booking";
=======
import LogIn from "./components/login"
import Booking from "./components/booking/booking"
import Show from "./components/searchFlight"
>>>>>>> c0181f0d1c13dddd07ee83f34b96d772b192f80e

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeScreen />,
//   },

<<<<<<< HEAD
//   {
//     path: "register",
//     element: <Register />,
//   },
//   {
//     path: "login",
//     element: <LogIn />,
//   },
//   {
//     path: "booking/:id",
//     element: <Booking />,
//   },
// ]);
=======
const router = createBrowserRouter([
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
    path: "booking/:id",
    element: <Booking />,
  },
  {
    path : "flights",
    element : <Show />
  }

]);
>>>>>>> c0181f0d1c13dddd07ee83f34b96d772b192f80e

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={HomeScreen()} />
            <Route path="/login" element={LogIn()} />
            <Route path="/register" element={Register()} />
            <Route path="/booking/:id" element={Booking()} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
