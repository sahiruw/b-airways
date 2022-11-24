import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Register from "./components/register";
import LogIn from "./components/login"

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
]);

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
