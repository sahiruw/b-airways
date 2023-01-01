import React from "react";
import { useState, useEffect } from "react";
import SeatSelection from "./seatSelection";
import DetailForm from "./detailForm";

function Booking(props) {
  const [loggedUser, setLoggeduser] = useState(null);
  const [userSelectedSeats, setUserSelectedSeats] = useState([]);

  useEffect(() => {
    fetch("/api/isLogged")
      .then((res) => res.json())
      .then((data) => {
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
      .then((data) => {});
  };
  const style_card = {
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
    paddingTop: 5,
  };
  let sc = 3;
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded" style={style_card}>
      {Array.from(Array(sc).keys()).map((i) => (
        <DetailForm id={i} />
      ))}
      {userSelectedSeats.map((seat) => (" " + seat + " "))}
      <SeatSelection
        flightID={2}
        seatClass="Platinum"
        seatCount={sc}
        setUserSelectedSeats={setUserSelectedSeats}
      />
      <button
        type="submit"
        className="btn btn-primary btn-lg btn-block"
        // onClick={(e) => submit(e)}
      >
        Fuck you
      </button>
    </div>
  );
}

export default Booking;
