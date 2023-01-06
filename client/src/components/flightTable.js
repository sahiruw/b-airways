import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const DisplayTable = (props) => {
  const navigate = useNavigate();

  const toBooking = (id) => {
    navigate("/booking", { state: { id: id, passengerCount:props.selectedValues.passengerCount, seatType:props.selectedValues.seat_type } });
  };

  if (!props.tableData[0]) return <div>Hi</div>;
  
  return (
    <div className="table-responsive">
  
      <table className="table table-striped table-hover align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Depature</th>
            <th scope="col">Arrival</th>
            <th scope="col">Book</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {props.tableData.map((val, index) => {
            return (
              <tr key={val.ID}>
                <th>{val.ID}</th>
                <td>{val.start_destination}</td>
                <td>{val.end_destination}</td>
                <td>{val.departure_time}</td>
                <td>{val.arrival_time}</td>
                <td>
                  <button className="btn btn-outline-secondary" onClick={()=>{toBooking(val.ID)}}>
                    Book
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
