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
          setLoggeduser(data.name);
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

  return (

    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ height: "80px", marginRight: "0px", marginLeft: "0px" }}
    >
      <a className="navbar-brand" href="/">
        <img
          width="50"
          height="30"
          style={{
            width: "60px",
            height: "36px",
            paddingTop: "0px",
            marginTop: "2px",
            transform: "scale(1.3)",
            paddingRight: "0px",
            marginLeft: "52px",
            marginRight: "52px",
          }}
          src={logo}
        />
      </a>
      <div className="collapse navbar-collapse">
        <ul className="nav justify-content-between" style={{ width: "80%" }}>
          <li className="nav-item" style={{ marginRight: "0px" }}>
            <a href="#div1">
            <button className="btn btn-primary nav-button" type="button">
              Book
            </button>
            </a>
            
          </li>
          <li className="nav-item">
            <a href="#div2">
              <button
                className="btn btn-primary nav-button"
                type="button"
                style={{ width: "94.9375px" }}
              >
              About Us
            </button>
            </a>
          </li>
          <li className="nav-item" style={{ marginRight: "62px" }}>
            <a href="#div3">
            <button className="btn btn-primary nav-button" type="button">
              Our Fleet
            </button>
            </a>
            
          </li>
        </ul>
        {loggedUser ? (
                <ul className="nav" style={{ width: "40%", marginLeft: "200px" }}>
                <li
                  className="nav-item"
                  style={{ paddingRight: "0px", marginLeft: "-18px" }}
                >
                  <a
                    className="nav-link"
                    style={{ fontFamily: "nexa", color: "#ffffff", fontSize: "20px" }}
                    href="carousal"
                  >
                    <i
                      className="fa fa-user"
                      style={{ color: "#ffffff", transform: "scale(1.75)",marginRight: "15px" }}
                    />
                    {loggedUser}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-light nav-button"
                    role="button"
                    href="signin.html"
                    style={{ marginLeft: "64px" }}
                    onClick={(e) => logout(e)}
                  >
                    Logout
                  </a>
                </li>
              </ul>
              ) : (
                <ul className="nav" style={{ width: "40%", marginLeft: "200px" }}>
                  <li className="nav-item">
                    <a href="/login" className="nav-link">
                      <button
                        className="btn btn-primary nav-button"
                        type="button"
                      >
                        Log In
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/register" className="nav-link">
                      <button
                        className="btn btn-primary nav-button"
                        type="button"
                      >
                        Register
                      </button>
                    </a>
                  </li>
                </ul>
              )}
        
      </div>
    </nav>
  );
}

export default NavBar;
