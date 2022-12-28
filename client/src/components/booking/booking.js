import React from "react";
import {useState, useEffect} from "react";
import SeatSelection from "./seatSelection";

function Booking() {

  const [loggedUser, setLoggeduser] = useState(null);

  useEffect(() => {
    fetch("/api/isLogged")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          setLoggeduser(data.user);
        } else {
          setLoggeduser(null);
        }
      });
  });

  

  const submit = (e) => {
    e.preventDefault();
    
    fetch("/api/getuser?username=" + loggedUser)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      });
      
  };

  
  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => submit(e)}
      >
        Fuck you
      </button>
      hi
      <SeatSelection aircraftID = {1} />
    </div>
  );
}

export default Booking;
