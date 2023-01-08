import React, { useEffect, useState } from "react";

import "./assets/css/Customizable-Background--Overlay.css";
import "./assets/css/Landing-Section-with-Call-to-Action-BS4.css";
import "./assets/css/Navbar-with-menu-and-login-km-Navbar.css";
import "./assets/css/Sakae-Simple-Section.css";
import "./assets/css/styles.css";
import logo from "./assets/img/Logo W.png";

//import all css files from assests directory
function NavBar() {
  const [loggedUser, setLoggeduser] = useState(null);

  useEffect(() => {
    fetch("/api/isLogged")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setLoggeduser(data.user);
        } else {
          setLoggeduser(null);
        }
      });
  }, []);

  const logout = (e) => {
    e.preventDefault();

    fetch("/api/logout", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        document.location.replace("/");
      })
    );
  };

  // return (
  //   <div id="nav-bar">
  //     <nav className="navbar navbar-light navbar-expand-md" style={{
  //         opacity: 0.78,
  //         height: 107,
  //         paddingTop: 2,
  //         paddingBottom: 0,
  //         marginTop: -22,
  //         borderTopColor: "rgba(0, 255, 255, 0)",
  //       }}>
  //       <a className="navbar-brand" href="index.html">
  //           <img
  //             width={50}
  //             height={30}
  //             style={{
  //               width: 60,
  //               height: 36,
  //               paddingTop: 0,
  //               marginTop: 2,
  //               transform: "scale(1.50)",
  //               paddingRight: 0,
  //               marginLeft: 2,
  //               marginRight: 2,
  //             }}
  //             src="assets/img/Logo W.png"
  //             alt="Logo"
  //           />
  //         </a>


  //       <div className="collapse navbar-collapse" id="navbarNav">
  //         <ul className="navbar-nav mx-auto">
  //           <li className="nav-item active">
  //             <a href="/" className="nav-link">
  //               Home
  //             </a>
  //           </li>
  //           <li className="nav-item active">
  //             <a href="/#section3" className="nav-link">
  //               Contact
  //             </a>
  //           </li>
  //           <li className="nav-item active">
  //             <a href="/table" className="nav-link">
  //               Flights
  //             </a>
  //           </li>

  //           {loggedUser ? (
  //             <>
  //               {" "}
  //               <li className="nav-item active">
  //                 <a href="/" className="nav-link">
  //                   {loggedUser}
  //                 </a>
  //               </li>
  //               <li className="nav-item active">
  //                 <button onClick={(e) => logout(e)}>Logout</button>
  //               </li>
  //             </>
  //           ) : (
  //             <>
  //               <li className="nav-item active">
  //                 <a href="/login" className="nav-link">
  //                   Login
  //                 </a>
  //               </li>

  //               <li className="nav-item active">
  //                 <a href="/register" className="nav-link">
  //                   Register
  //                 </a>
  //               </li>
  //             </>
  //           )}
  //         </ul>
  //       </div>
  //     </nav>
  //   </div>
  // );

  return (
    <div style={{ backgroundColor: '#075257' }}>
      <nav className="navbar navbar-light navbar-expand-md" style={{ opacity: 0.78, height: 107, paddingTop: 2, paddingRight: 0 }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img
              width={50}
              height={30}
              style={{ width: 60, height: 36, paddingTop: 0, marginTop: 2, transform: 'scale(1.50)', paddingRight: 0, marginLeft: 52, marginRight: 52 }}
              src={logo}
            />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav flex-grow-1 justify-content-between" style={{ paddingRight: 0, marginRight: 0 }}>
              <li className="nav-item" style={{ marginRight: 0 }}>
                <button className="btn btn-primary nav-button" type="button">Book</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary nav-button" type="button" style={{ width: 94.9375 }}>
                  Flight Schedule
                </button>
              </li>
              <li className="nav-item" style={{ marginRight: 62 }}>
                <button className="btn btn-primary nav-button" type="button">Our Fleet</button>
              </li>
              <li className="nav-item">
                <a className="btn btn-light nav-button" role="button" href="login.html">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-light nav-button" role="button" href="signin.html">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
