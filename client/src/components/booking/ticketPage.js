import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../assets/css/invoice.css";
import "../assets/css/air-ticket.css";

import logo from "../assets/img/Logo.png";
import Ticket from "./ticket";

import JsPDF from 'jspdf';

function getRandomLetter() {
    var letterCode = Math.floor(Math.random() * (68 - 65 + 1)) + 65;
    return String.fromCharCode(letterCode);
  }

const TicketsPage = () => {
  const location = useLocation();
  const [userSelectedSeats, setUserSelectedSeats] = useState([]);

  useEffect(() => {
    setUserSelectedSeats(location.state.userSelectedSeats);
  }, [location.state.userSelectedSeats]);

  const generatePDF = () => {
    document.getElementById('exbut').style.display = 'none';
    const report = new JsPDF('potrait','pt','a1');
    report.html(document.querySelector('#divToExport')).then(() => {
        report.save('report.pdf');
    });
    //wait 2 seconds and then show the button again
    setTimeout(function(){
      document.getElementById('exbut').style.display = 'block';
    }, 2000);
    }

    let gate = getRandomLetter()
  return (
    <div id="divToExport">
      <div
        class="invoice-company text-inverse f-w-600"
        style={{ height: "117px" }}
      >
        <img
          width="100"
          height="80"
          style={{ height: "75px", width: "inherit" }}
          src={logo}
        />
        <span
          style={{
            color: "#0b5c5c",
            "font-size": "60px",
            "margin-left": "18px",
            "font-family": "Nexa",
            "font-weight": "800",
          }}
        >
          B Airways PVT LTD
        </span>
      </div>
      <button onClick={generatePDF} type="button" id="exbut">Export PDF</button>
      <div id="ticks">
        {userSelectedSeats
          ? userSelectedSeats.map((seat, index) => {
              return (
                <Ticket
                  seat={seat}
                  userData={location.state.userData[index]}
                  flightDetails={location.state.flightDetails}
                  seatClass={location.state.seatClass}
                  bookingID = {location.state.bookingID}
                  gate = {gate}
                />
              );
            })
          : ""}
      </div>
      <div class="invoice-note">
        <span> * Make all cheques payable to B Airways</span>
        <br />
        <span> * Payment is due within 30 days</span>
        <br />
        <span>
          {" "}
          * If you have any questions concerning this invoice, contact Amila,
          +94 15522397, ponnaamila@bairways.com{" "}
        </span>
      </div>
      <div class="invoice-footer">
        <p class="text-center m-b-5 f-w-600"> THANK YOU</p>
        <p class="text-center">
          <span class="m-r-10">
            <i class="fa fa-globe fa-fw fa-lg"></i>Â bairways.com
          </span>
          <span class="m-r-10">
            <i class="fa fa-fw fa-lg fa-phone-volume"></i> T:016-18192302
          </span>
          <span class="m-r-10">
            <i class="fa fa-envelope fa-fw fa-lg"></i> bairways@bways.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default TicketsPage;
