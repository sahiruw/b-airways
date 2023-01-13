import React from "react";
import { useEffect, useState } from "react";
import moment from "moment";

function PassengerDetails() {
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [member_details_above18, setMemberDetailsAbove18] = useState([]);
  const [guest_details_above18, setGuestDetailsAbove18] = useState([]);
  const [member_details_below18, setMemberDetailsBelow18] = useState([]);
  const [guest_details_below18, setGuestDetailsBelow18] = useState([]);
  const [FlightID, setFlightID] = useState("");

  // useEffect(() => {
  //     let date_passed = date;

  //     fetch(`api/Passenger_Details?date=${date_passed}`)
  //     .then(res => res.json())
  //     .then((data) => {
  //         setMemberDetailsAbove18(data.above_18_members);
  //         setMemberDetailsBelow18(data.below_18_members);
  //         console.log(member_details_above18);
  //         console.log(member_details_below18);

  //     })
  // },[])

  const get_details = (e) => {
    let flight_id = FlightID;

    fetch(`api/Flight_Details_Members?flight_id=${flight_id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.flightdataMembers);
        // console.log(data.flightdataGuest);
        setMemberDetailsAbove18(data.member_details_above18);
        setGuestDetailsAbove18(data.guest_details_above18);
        setMemberDetailsBelow18(data.member_details_below18);
        setGuestDetailsBelow18(data.guest_details_below18);
        
      });

    // let A = moment('2023-01-11');
    // let B = moment('2000-02-29');
    // let C = moment('2020-01-03');
    // let age = A.diff(B, 'years');// => 1
    // console.log(age);
  };

  let member_details_above18_size = member_details_above18.length;
  let member_details_below18_size = member_details_below18.length;
  let guest_details_above18_size = guest_details_above18.length;
  let guest_details_below18_size = guest_details_below18.length;

  let display_above18 = (member_details_above18_size == 0 && guest_details_above18_size == 0 )? "none" : "flex";
  let display_below18 = (member_details_below18_size == 0 && guest_details_below18_size == 0)? "none" : "flex";

  
  
  return (
    
    <div>
        <div className="shadow-lg p-3 mb-5 bg-light rounded" style={{"justify-content" : "center",width : 800,marginLeft:300}}>
      <h3 style={{"font-weight": "bold"}}>Passenger Details in the next immediate flight</h3>
      <br></br>
      <label style={{"font-weight": "bold"}}>Flight ID : </label>
      <input
        type="number"
        min="1"
        max="9"
        style={{ marginLeft: 5 ,marginRight : 15,width : 100}}
        onChange={(e) => {
          setFlightID(e.target.value);
        }}
      ></input>
      <button class = "btn btn-outline-secondary" onClick={(e) => get_details(e)} style = {{width:150}}>GET</button>

      </div>
      
      <h3 style={{display : display_above18,marginLeft:300,"font-weight": "bold"}}>Passengers Above 18</h3>
      
      {/* <div class="shadow-lg p-3 mb-5 bg-light rounded" style={{"justify-content" : "center",width : 800,marginLeft:300,display : display_above18}}> */}
      
      
      <div className="table-responsive shadow-lg p-3 mb-5 bg-light rounded" style={{"justify-content" : "center",width : 800,marginLeft:300,display : display_above18}}>
          <table
            className="table table-striped table-hover align-middle"
            id="table"
          >
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope = "col">Member/Guest</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {member_details_above18.map((val) => {
                return (
                  <tr key={val.fname}>
                    <th>{val.age}</th>
                    <td>{val.member_bday}</td>
                    <td>Member</td>
                  </tr>
                );
              })}
              {guest_details_above18.map((val) => {
                return (
                  <tr key={val.fname}>
                    <th>{val.age}</th>
                    <td>{val.member_bday}</td>
                    <td>Guest</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        

        
       
        <h3 style={{display : display_below18,marginLeft:300,"font-weight": "bold"}}>Passengers Below 18</h3>
        
    
                
            <div className="table-responsive shadow-lg p-3 mb-5 bg-light rounded" style={{"justify-content" : "center",width : 800,marginLeft:300,display : display_below18}}>
            <table
            className="table table-striped table-hover align-middle"
            id="table"
            >
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope = "col">Member/Guest</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {member_details_below18.map((val) => {
                return (
                  <tr key={val.fname}>
                    <th>{val.age}</th>
                    <td>{val.member_bday}</td>
                    <td>Member</td>
                  </tr>
                );
              })}
              {guest_details_below18.map((val) => {
                return (
                  <tr key={val.fname}>
                    <th>{val.age}</th>
                    <td>{val.member_bday}</td>
                    <td>Guest</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
      
    </div>
  );
}

export default PassengerDetails;
