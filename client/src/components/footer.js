import React, { useEffect, useState } from "react";
import logo from "./assets/img/Logo.png";
import "./assets/css/Footer-KEET-and-OHO.css"
function Footer() {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="underconstruction" style={{ "border-color": "#08575c" }}>
            <i
              class="fa fa-instagram"
              style={{ "border-color": "#032e31", opacity: "1" }}
            ></i>
          </a>
          <a href="underconstruction" style={{ "border-color": "#08575c" }}>
            <i class="fa fa-snapchat-ghost"></i>
          </a>
          <a href="underconstruction" style={{ "border-color": "#08575c" }}>
            <i class="fa fa-twitter" style={{ color: "#08575c" }}></i>
          </a>
          <a href="underconstruction" style={{ "border-color": "#08575c" }}>
            <i class="fa fa-facebook-f" style={{ color: "#08575c" }}></i>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item list-inline-item">
            <a href="index1.html">Home</a>
          </li>
          <li class="list-inline-item list-inline-item">
            <a href="#">About us</a>
          </li>
          <li class="list-inline-item list-inline-item">
            <a href="destinations.html">Services</a>
          </li>
          <li class="list-inline-item list-inline-item">
            <a href="#">Enquiry</a>
          </li>
          <li class="list-inline-item list-inline-item">
            <a href="#">Contact us</a>
          </li>
        </ul>

        <div
          class="text-center"
          style={{ "margin-top": "16px", "margin-bottom": "18px" }}
        >
          <img
            class="img-fluid"
            src={logo}
            style = {{"height":"41px","transform":"scale(1.50)","padding-top":"0px",}}
          />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
