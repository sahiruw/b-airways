import React from "react";
import {useState,useEffect} from "react";

function FlightSchedule(){

    const[form ,setForm] = useState({
        start_destination : "",
        end_destination : "",
        aircraft_id : "",
        departure_date : "",
        arrival_date : "",
        departure_time : "",
        arrival_time : "",
        cost : "",
    });

    const[Airports,setAirports] = useState([]);

    let Staff = [];

    function addToArray(){

        var staffInput = document.getElementById("staffInputField").value;
        if(staffInput != "" && Staff.includes(staffInput) == false){
            Staff.push(staffInput);

            var listItem = document.createElement('li');
    
            // set the text content of the list item to the input value
            listItem.textContent = staffInput;
    
            // get the list
            var list = document.getElementById('list');
    
            // add the list item to the list
            list.appendChild(listItem);
        }
        
    }

    function testfunction(){
        console.log(Staff);
    }
    

    useEffect(() => {
        
        fetch("/api/departure")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.status);   
            if(data.status){
                setAirports(data.data);
                
            }
        })

    })

    const submit = (e) => {
        e.preventDefault();

        let start_destination = form.start_destination;
        let end_destination = form.end_destination;
        let aircraft_id = form.aircraft_id;
        let departure_date_time = form.departure_date + " " + form.departure_time;
        let arrival_date_TIME = form.arrival_date + " " + form.arrival_time;
        let cost = form.cost;

        fetch("/api/schedule",{
            method : "POST",
            body : JSON.stringify({start_dest:start_destination,end_dest:end_destination,aircraft_ID:aircraft_id,departure_time:departure_date_time,arrival_time:arrival_date_TIME,cost:cost}),
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.status);
            console.log(data.message);   
            if(data.status){
                alert("Flight Scheduled Sucessfully");
            }
            else{
                alert("Flight Scheduling Failed");
            }
        })


    }

    const style_card = {
        marginTop : 30,
        width : "auto",
        marginLeft : 300,
        marginRight : 300,
        height : "auto",
        paddingTop : 20
        
    
    };

    return(
        <div className="shadow-lg p-3 mb-5 bg-white rounded" style={style_card}>
      <div style={{padding:10,marginLeft:400,margin:100,width:700}}>
      <h3>Schedule the Flight</h3>
      <div
        className={`alert alert-${alert.atype}`}
        role="alert"
        style={alert.aalert}
      >
        {alert.amessage}
      </div>

      <div className="mb-3">
        <label>From</label>
        <input
          type="text"
          className="form-control"
          placeholder="Start Destination"
          onChange={(e) => {
            setForm({
              ...form,
              start_destination: e.target.value,
            });
          }}
        /> 
        {/* <select className = "col-2" onChange={(e) => {
                    setForm({
                        ...form,
                        start_destination: e.target.value,
                    });
                }}>
                    <option selected>From--</option>
                    {Airports.map((val) => {
                        return(
                            
                            <option value={val.code}>{val.code}</option>
                        )
                    })}
        </select> */}
      </div>
      <div className="mb-3">
        <label>To</label>
        <input
          type="text"
          className="form-control"
          placeholder="End Destination"
          onChange={(e) => {
            setForm({
              ...form,
              end_destination: e.target.value,
            });
          }}
        />
      </div>

      <div className="mb-3">
        <label>Aircraft ID</label>
        <input
          type="number"
          className="form-control"
          placeholder="Aircraft ID"
          min = "1"
          max = "20"
          onChange={(e) => {
            setForm({
              ...form,
              aircraft_id: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label>Departure Date : </label>
        <input
          type="date"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => {
            setForm({
              ...form,
              departure_date: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label>Arrival Date : </label>
        <input
          type="date"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => {
            setForm({
              ...form,
              arrival_date: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label>Departure Time : </label>
        <input
          type="time"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => {
            setForm({
              ...form,
              departure_time: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label>Arrival Time : </label>
        <input
          type="time"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => {
            setForm({
              ...form,
              arrival_time: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label>Cost : </label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter password"
          min="20" 
          max="1000"
          onChange={(e) => {
            setForm({
              ...form,
              cost: e.target.value,
            });
          }}
        />
      </div>

      <div className="mb-3">
        <label>Staff : </label>
        <input
          type="text"
          id = "staffInputField"
          className="form-control"
          placeholder="Name"
          min="20" 
          max="1000"
          onChange={(e) => {
            setForm({
              ...form,
              cost: e.target.value,
            });
          }}
        />
        <button onClick={(e) => addToArray(e)}>+</button>
        <button onClick={(e) => testfunction(e)}>blaa</button>
      </div>

      <ul id="list">
        
      </ul>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-outline-primary"
          style={{marginTop:10}}
          onClick={(e) => submit(e)}
        >
          Schedule the Flight
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </div>
    </div>
    
    );
}

export default FlightSchedule;