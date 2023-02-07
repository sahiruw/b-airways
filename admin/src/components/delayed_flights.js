import React from "react";
import { useState, useEffect } from "react";

function Delayed_Flight() {
  const [f_id, setF_id] = useState("");
  const [dept_time, setDept_time] = useState("");
  const[arr_time, setArr_time] = useState("");

  const submit = () => {
    if (f_id === "") {
      alert("Please enter Flight ID");
      return;
    }
    else if (dept_time === "" || arr_time === "") {
      alert("Please enter Departure Time and Arrival Time");
      return;
    }
    

    fetch("/api/delayedFlightHandle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        f_id: f_id,
        dept_time: dept_time,
        arr_time: arr_time,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div
        class="shadow-lg p-3 mb-5 bg-white rounded"
        style={{ "justify-content": "center", display: "flex" }}
      >
        <h1>Delayed Flight</h1>
      </div>

      <div
        class="shadow-lg p-3 mb-5 bg-white rounded"
        style={{ "justify-content": "center", display: "flex" }}
      >
        <div class="p-3 mb-5">
          <label htmlFor="f_id">Flight ID</label>
          <input
            id="f_id"
            type="number"
            onChange={(e) => {
              setF_id(e.target.value);
            }}
          />{" "}
        </div>

        <div class="p-3 mb-5">
          <label htmlFor="dept_time">Depature Time</label>
          <input
            id="dept_time"
            type="datetime-local"
            onChange={(e) => {
              setDept_time(e.target.value);
            }}
          />{" "}
        </div>
        <div class="p-3 mb-5">
          <label htmlFor="arr_time">Arrival Time</label>
          <input
            id="arr_time"
            type="datetime-local"
            onChange={(e) => {
              setArr_time(e.target.value);
            }}
          />{" "}
        </div>
        <button class="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Delayed_Flight;
