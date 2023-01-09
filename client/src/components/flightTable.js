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

  if (!props.tableData[0]) return <div>Hi</div>;

  return (
    // <div className="table-responsive">

    //   <table className="table table-striped table-hover align-middle">
    //     <thead>
    //       <tr>
    //         <th scope="col">#</th>
    //         <th scope="col">From</th>
    //         <th scope="col">To</th>
    //         <th scope="col">Depature</th>
    //         <th scope="col">Arrival</th>
    //         <th scope="col">Book</th>
    //       </tr>
    //     </thead>
    //     <tbody className="table-group-divider">
    //       {props.tableData.map((val, index) => {
    //         return (
    //           <tr key={val.ID}>
    //             <th>{val.ID}</th>
    //             <td>{val.start_destination}</td>
    //             <td>{val.end_destination}</td>
    //             <td>{val.departure_time}</td>
    //             <td>{val.arrival_time}</td>
    //             <td>
    //               <button className="btn btn-outline-secondary" onClick={()=>{toBooking(val.ID)}}>
    //                 Book
    //               </button>
    //             </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>

    <div class="container" style={{ "margin-bottom": "20px" }}>
      <div
        class="col-md-12 search-table-col"
        style={{
          "padding-top": "0px",
          "margin-top": "-36px",
          "padding-bottom": "0px",
        }}
      >
        <div class="form-group pull-right col-lg-4">
          <input
            class="search form-control"
            type="text"
            placeholder="Search by typing here.."
            style={{ opacity: "0.60" }}
          />
        </div>
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
