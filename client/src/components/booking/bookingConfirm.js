import React from "react";
import { useState, useEffect } from "react";
import SeatSelection from "./seatSelection";
import DetailForm from "./detailForm";
import { Link, useNavigate , useLocation} from "react-router-dom";

function BookingConfirm(props) {
  //this receives data from flight table and cards
  const location = useLocation();

  const [userSelectedSeats, setUserSelectedSeats] = useState([]);
  const [userData, setUserData] = useState({});
  const [flightID, setFlightID] = useState({});


useEffect(() => {
    setUserSelectedSeats(location.state.userSelectedSeats);
    setUserData(location.state.userData);
    setFlightID(location.state.flightID);
    }, [location.state]);

  const submit = (e) => {
    let dataforbackend = [];
    for (let id in userSelectedSeats) {
      dataforbackend.push([userSelectedSeats[id], userData[id]]);
    }

    fetch("/api/book", {
      method: "POST",
      body: JSON.stringify({flightID, dataforbackend}),
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      res.json().then((data) => {

      })
    );
  };

  const style_card = {
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
    paddingTop: 5,
  };

  return (
    <>
    {JSON.stringify(userSelectedSeats)}
    {JSON.stringify(userData)}
    {JSON.stringify(flightID)}
    <div class="row">
  <div class="col-75">
    <div class="container">
      
    </div>
  </div>

  <div class="col-25">
    <div class="container">
      <h4>Cart
        <span class="price">
          <i class="fa fa-shopping-cart"></i>
          <b>4</b>
        </span>
      </h4>
      <p><a href="#">Product 1</a> <span class="price">$15</span></p>
      <p><a href="#">Product 2</a> <span class="price">$5</span></p>
      <p><a href="#">Product 3</a> <span class="price">$8</span></p>
      <p><a href="#">Product 4</a> <span class="price">$2</span></p>
      <hr/>
      <p>Total <span class="price"><b>$30</b></span></p>
    </div>
  </div>
</div>
    </>
  );
}

export default BookingConfirm;