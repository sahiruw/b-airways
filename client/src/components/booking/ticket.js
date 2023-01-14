import React, { Component } from "react";

import "../assets/css/invoice.css";
import "../assets/css/air-ticket.css";

import img1 from "../assets/img/kindpng_771409.png";
import img2 from "../assets/img/Logo W.png";
import logo from "../assets/img/Logo.png";
import img3 from "../assets/img/Logo-ticket.png";
import moment from "moment";



const ticket = (props) => {
  return (
    <div id="divtoexp" class="div-ticket">
    <div class="card mb-4 mb-md-0">
      <div class="card-body">
        <div id="header" class="row tkt-heading">
          <div
            class="col-lg-4"
            style={{
              width: "66.666667%",
              "border-right": "5.4px dotted rgb(255,255,255)",
            }}
          >
            <h3 class="tkt-h3">AIRLINE TICKET</h3>
          </div>
          <div class="col" style={{ width: "33.3333%" }}>
            <span class="pull-right hidden-print">
              <img
                width="100"
                height="80"
                style={{ height: "50px", width: "inherit" }}
                src={img2}
              />
            </span>
          </div>
        </div>
        <div class="row tkt-body">
          <div class="col-sm-1">
            <div
              class="card"
              style={{ background: "#b3c8c9f5", border: "none" }}
            >
              <div
                class="card-body"
                style={{ background: "#b3c8c9f5" }}
              ></div>
            </div>
            <img style={{ width: "100%", height: "81%" }} src={img1} />
          </div>
          <div
            class="col-sm-7"
            style={{ "border-right": "5.4px dotted #053d41" }}
          >
            <div
              class="card"
              style={{ background: "#b3c8c900", border: "none" }}
            >
              <div class="card-body" style={{ background: "#b3c8c900" }}>
                <div class="row tkt-det-row">
                  <div class="col-sm-4">
                    <p class="text-q mb-0">Passanger&#39;s Name</p>
                  </div>
                  <div class="col-sm-8">
                    <p class="text-filled mb-0">{props.userData.firstName + " " + props.userData.lastName}</p>
                  </div>
                </div>
                <div class="row tkt-det-row">
                  <div class="col-sm-3">
                    <p class="text-q mb-0">Seat No</p>
                  </div>
                  <div class="col-sm-3">
                    <p class="text-filled mb-0">S{props.seat}</p>
                  </div>
                  <div class="col-sm-3">
                    <p class="text-q mb-0">Class</p>
                  </div>
                  <div class="col-sm-3">
                    <p class="text-filled mb-0">{props.seatClass}</p>
                  </div>
                </div>
                <div class="row tkt-det-row">
                  <div class="col-sm-2">
                    <p class="text-q mb-0">From</p>
                  </div>
                  <div class="col-sm-4">
                    <p class="text-filled mb-0">{props.flightDetails.from[1]} | {props.flightDetails.details.start_destination}</p>
                  </div>
                  <div class="col-sm-2">
                    <p class="text-q mb-0">To</p>
                  </div>
                  <div class="col-sm-4">
                    <p class="text-filled mb-0">{props.flightDetails.to[1]} | {props.flightDetails.details.end_destination}</p>
                  </div>
                </div>
                <div class="row tkt-det-row">
                  <div class="col-sm-2">
                    <p class="text-q mb-0">Flight No</p>
                  </div>
                  <div class="col-sm-4">
                    <p class="text-filled mb-0">F{props.flightDetails.details.ID}</p>
                  </div>
                  <div class="col-sm-2">
                    <p class="text-q mb-0">Date</p>
                  </div>
                  <div class="col-sm-4">
                    <p class="text-filled mb-0">{new Date(props.flightDetails.details.departure_time).toDateString()}</p>
                  </div>
                </div>
                <div class="row tkt-det-row">
                  <div class="text-q col-sm-2">
                    <p class="mb-0">Departue</p>
                  </div>
                  <div class="col-sm-4">
                    <p class="text-filled mb-0">{new Date(props.flightDetails.details.departure_time).toLocaleTimeString()}</p>
                  </div>

                </div>
                <div class="row tkt-det-row">
                  <div class="col-sm-2">
                    <p class="text-q mb-0">Ticket ID</p>
                  </div>
                  <div class="col-sm-4">
                    <p class="text-filled mb-0">T122300{props.bookingID}</p>
                  </div>
                  <div class="col-sm-2">
                    <p class="text-q mb-0">Gate</p>
                  </div>
                  <div class="col-sm-4">
                    <p class="text-filled mb-0">{props.gate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-sm-4"
            style={{
              background: "url('" + { img3 } + "') no-repeat 10% 10%",
            }}
          >
            <div
              class="card"
              style={{ background: "#b3c8c917", border: "none" }}
            >
              <div class="card-body" style={{ background: "#b3c8c933" }}>
                <div class="row tkt-det-row">
                  <div class="col col-tear">
                    <p class="mb-0 text-q">{props.userData.firstName + " " + props.userData.lastName}</p>
                  </div>
                </div>
                <div class="row tkt-det-row">
                  <div class="col-sm-6 col-tear">
                    <p class="mb-0 text-q">S{props.seat}</p>
                  </div>
                  <div class="col-sm-6 col-tear">
                    <p class="mb-0 text-q">{props.seatClass}</p>
                  </div>
                </div>
                <div class="row tkt-det-row">
                  <div class="col-sm-6 col-tear">
                    <p class="mb-0 text-q">{props.flightDetails.details.start_destination} | {props.flightDetails.details.end_destination}</p>
                  </div>
                </div>
                <div class="row tkt-det-row">
                  <div class="col col-tear">
                    <p class="mb-0 text-q">F{props.flightDetails.details.ID}</p>
                  </div>
                </div>
                <div class="row tkt-det-row">
                  <div class="col col-tear">
                    <p class="mb-0 text-q">{new Date(props.flightDetails.details.departure_time).toLocaleDateString() + "|" + new Date(props.flightDetails.details.departure_time).toLocaleTimeString()}</p>
                  </div>
                </div>
                <div class="row tkt-det-row">
                  <div class="col col-tear">
                    <p class="mb-0 text-q">T122300{props.bookingID}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" class="row tkt-footer">
          <div class="col-lg-4" style={{ width: "70%" }}>
            <span class="pull-right hidden-print"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ticket;
