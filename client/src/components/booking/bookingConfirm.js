import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "../assets/css/bkconfirm.css"

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
    // let dataforbackend = [];
    // for (let id in userSelectedSeats) {
    //   dataforbackend.push([userSelectedSeats[id], userData[id]]);
    // }

    fetch("/api/getConfirmDetails", {
          method: "POST",
          body: JSON.stringify({ flightID }),
          headers: { "Content-Type": "application/json" },
        }).then((res) => res.json().then((data) => {}));
        console.log("hello");
    // fetch("/api/book", {
    //   method: "POST",
    //   body: JSON.stringify({ flightID, dataforbackend }),
    //   headers: { "Content-Type": "application/json" },
    // }).then((res) => res.json().then((data) => {}));
  };

  const style_card = {
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
    paddingTop: 5,
  };

  return (
    <>
      {/* {JSON.stringify(userSelectedSeats)}
      {JSON.stringify(userData)}
      {JSON.stringify(flightID)} */}

      <div
        class="accordion-module-content"
        style={{
          "padding-right": "54px",
          "padding-left": "0px",
          "margin-right": "254px",
          "margin-left": "140px",
          "margin-top": "36px",
          "margin-bottom": "52px",
        }}
      >
        <div class="T69">
          <div class="anci-content">
            <div class="row">
              <div class="col-md-12 col-xs-12 mb-10 no-gutter-left">
                <div class="itinerary visible-lg visible-md" tabindex="0">
                  <h4 style={{ "font-weight": "bold" }}>
                    {" "}
                    Colombo (CMB) <span class="icn-dest-new"></span> - Abu Dhabi
                    (AUH){" "}
                  </h4>
                </div>
              </div>
              <div class="col-sm-12 mob-seat-bg">
                <div
                  class="table-br"
                  style={{ "margin-right": "35px", "margin-left": "35px" }}
                >
                  <table class="table bordered">
                    <thead>
                      <tr class="row-hkc">
                        <th
                          scope="col"
                          style={{ width: "50%", "text-align": "left" }}
                        >
                          Passenger
                        </th>
                        <th scope="col" style={{ width: "20%" }}>
                          Seat Number
                        </th>
                        <th scope="col" style={{ width: "30%" }}>
                          Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="row-bkc">
                        <td class="tb-cell-1"> Rasula Koralege </td>
                        <td class="tb-cell">S102</td>
                        <td class="tb-cell-2">1000</td>
                      </tr>
                      <tr class="row-bkc">
                        <td class="tb-cell-1"> Fathima Ifra</td>
                        <td class="tb-cell">S103</td>
                        <td class="tb-cell-2">1000</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="row-bkc">
                        <td class="tb-cell-1">Total Price</td>
                        <td class="tb-cell"></td>
                        <td
                          class="tb-cell-2"
                          style={{ "border-top": "2px solid #000000" }}
                        >
                          2000
                        </td>
                      </tr>
                      <tr class="row-bkc">
                        <td class="tb-cell-1">Discount</td>
                        <td class="tb-cell">2000 × 10%</td>
                        <td class="tb-cell-2">200</td>
                      </tr>
                      <tr class="row-bkc">
                        <td class="tb-cell-1">Final Price</td>
                        <td class="tb-cell"></td>
                        <td
                          class="tb-cell-2"
                          style={{
                            "border-top": "2px solid #000000",
                            "border-bottom": "2px double #000000",
                          }}
                        >
                          1800
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <button onClick={submit} class="btn btn-primary">HI WHOTTHO</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingConfirm;
