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
        for (let i = 0; i < data.flightdataMembers.length; i++) {
          let A = moment();
          let B = moment(data.flightdataMembers[i].member_bday);
          let age = A.diff(B, "years"); // => 1
          if (age >= 18) {
            setMemberDetailsAbove18([
              ...member_details_above18,
              data.flightdataMembers[i],
            ]);
            console.log(data.flightdataMembers[i].fname, "above 18 member");
          }
          if (age < 18) {
            console.log(data.flightdataMembers[i].fname, "below 18 member");
            setMemberDetailsBelow18([
              ...member_details_below18,
              data.flightdataMembers[i],
            ]);
          }
        }
        for (let i = 0; i < data.flightdataGuest.length; i++) {
          let A = moment();
          let B = moment(data.flightdataGuest[i].guest_bday);
          let age = A.diff(B, "years"); // => 1
          if (age >= 18) {
            console.log(data.flightdataGuest[i].fname, "above 18 guest");
            setGuestDetailsAbove18([
              ...guest_details_above18,
              data.flightdataGuest[i],
            ]);
          }
          if (age < 18) {
            console.log(data.flightdataMembers[i].fname, "below 18 guest");
            setGuestDetailsBelow18([
              ...guest_details_below18,
              data.flightdataGuest[i],
            ]);
          }
        }
      });

    // let A = moment('2023-01-11');
    // let B = moment('2000-02-29');
    // let C = moment('2020-01-03');
    // let age = A.diff(B, 'years');// => 1
    // console.log(age);
  };
  {JSON.stringify(member_details_above18)}
  return (
    <div>
      <h1>Passenger Details in the next immediate flight</h1>
      <input
        type="number"
        min="1"
        max="9"
        style={{ marginLeft: 100 }}
        onChange={(e) => {
          setFlightID(e.target.value);
        }}
      ></input>
      <button onClick={(e) => get_details(e)}>GET</button>
      {/* <h2>{console.log(member_details_below18)}</h2> */}
    </div>
  );
}

export default PassengerDetails;
