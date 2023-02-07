import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./assets/css/Table-With-Search.css"

const DisplayTable = (props) => {
  const navigate = useNavigate();

  const toBooking = (id) => {
    navigate("/booking", {
      state: {
        id: id,
        passengerCount: props.selectedValues.passengerCount,
        seatType: props.selectedValues.seat_type,
      },
    });
  };

  if (!props.tableData[0]) return (<div>
          <div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            No data to display
          </div>
    </div>);

  return (

    <div class="container" style={{ "margin-bottom": "20px" }}>
      <div
        class="col-md-12 search-table-col"
        style={{
          "padding-top": "0px",
          "margin-top": "-36px",
          "padding-bottom": "0px",
        }}
      >
        <span class="counter pull-right"></span>
        <div
          class="table-responsive table table-hover table-bordered results"
          style={{ "padding-left": "42px", "padding-right": "40px" }}
        >
          <table class="table table-hover table-bordered">
            <thead class="bill-header cs">
              <tr>
                <th
                  id="trs-hd-1"
                  class="col-lg-1"
                  style={{ "border-top-left-radius": "20px" }}
                >
                  ID
                </th>
                <th id="trs-hd-2" class="col-lg-2">
                  From
                </th>
                <th id="trs-hd-3" class="col-lg-2">
                  To
                </th>
                <th id="trs-hd-4" class="col-lg-2">
                  Departure Time
                </th>
                <th id="trs-hd-5" class="col-lg-2">
                  Departure Time
                </th>
                <th
                  id="trs-hd-6"
                  class="col-lg-2"
                  style={{
                    "border-top-right-radius": "20px",
                    "margin-left": "0px",
                  }}
                >
                  Book
                </th>
              </tr>
            </thead>
            <tbody>
              {props.tableData.map((val, index) => {
                return (
                  <tr key={val.ID}>
                    <th>{val.ID}</th>
                    <td>{val.start_destination}</td>
                    <td>{val.end_destination}</td>
                    <td>{new Date(val.departure_time).toLocaleString()}</td>
                    <td>{new Date(val.arrival_time).toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          toBooking(val.ID);
                        }}
                        style = {{"font-family":"nexa","font-weight":"bold","margin-right":"52px","margin-left":"73px","color":"#08575c",}}
                      >
                        <i class="fa fa-paper-plane-o" style = {{"font-size":"17px",}}></i>  BOOK
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayTable;
