import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import image from "../assets/img/accepted_cards.png";
import "../assets/css/countdown-timer.css";

import moment from "moment";

function PaymentWindow(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [endTime, setEndTime] = useState(moment().add(5, "minutes"));

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const diff = endTime.diff(now);
      const m = moment.duration(diff);
      setMinutes(m.minutes());
      setSeconds(m.seconds());

      if (diff <= 0) {
        clearInterval(interval);
        setTimedOut(true);
      }
    }, 1000);
  });

  const pay = (e) => {
    let bookingID = location.state.bookingId;
    let finalPrice = location.state.finalPrice;
    let timeNow = moment().format("YYYY-MM-DD HH:mm:ss");
    fetch("/api/pay", {
      method: "POST",
      body: JSON.stringify({ bookingID, finalPrice, timeNow }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json().then((data) => {}));

    navigate("/tickets", {
      state: {
        bookingID: bookingID,
        userSelectedSeats: location.state.userSelectedSeats,
        userData: location.state.userData,
        seatClass: location.state.seatClass,
        flightDetails: location.state.flightDetails,
      }
    });
  };

  return (
    <>
      {timedOut ? (
        <div style={{ margin: "10px", height: "500px" }}>
          <div class="alert" style={{ textAlign: "center" }}>
            Timed Out
          </div>

          <a href="/">
            <button
              className="btn btn-primary btn btn-theme"
              type="button"
              style={{
                width: "150px",
                height: "50px",
                fontSize: "15px",
                fontFamily: "NExa",
                marginLeft: "900px",
                marginRight: "0px",
                paddingRight: "8px",
                marginTop: "100px",
              }}
              onclick="location.href='/'"
            >
              Back to Home
            </button>
          </a>
        </div>
      ) : (
        <div style={{ margin: "10px" }}>
          <div
            class="container"
            style={{ height: "60px", width: "inherit", "margin-left": "200px" }}
          > 
            <div id="clockdiv">
              <div class="clock-wrapper" style={{ height: "200px" }}>
                <span class="minutes">{minutes}</span>
                <div class="smalltext">
                  <p>Minutes </p>
                </div>
              </div>
              <div class="clock-wrapper" style={{ height: "200px" }}>
                <span class="seconds"> {seconds}</span>
                <div class="smalltext">
                  <p>Seconds</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row .payment-dialog-row" style={{ marginTop: "60px" }}>
            <div class="col-12 col-md-4 offset-md-4">
              <div class="card credit-card-box">
                <div class="card-header">
                  <h3>
                    <span class="panel-title-text">Payment Details </span>
                    <img class="img-fluid panel-title-image" src={image} />
                  </h3>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group mb-3">
                        <label class="form-label" for="cardNumber">
                          Card number{" "}
                        </label>
                        <div class="input-group">
                          <input
                            id="cardNumber"
                            class="form-control"
                            type="tel"
                            required
                            placeholder="Valid Card Number"
                            disabled={true}
                          />
                          <span class="input-group-text">
                            <i class="fa fa-credit-card"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-7">
                      <div class="form-group mb-3">
                        <label class="form-label" for="cardExpiry">
                          <span>expiration </span>
                          <span>EXP </span> date
                        </label>
                        <input
                          id="cardExpiry"
                          class="form-control"
                          type="tel"
                          required
                          placeholder="MM / YY"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div class="col-5 pull-right">
                      <div class="form-group mb-3">
                        <label class="form-label" for="cardCVC">
                          cv code
                        </label>
                        <input
                          id="cardCVC"
                          class="form-control"
                          type="tel"
                          required
                          placeholder="CVC"
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group mb-3">
                        <label class="form-label" for="couponCode">
                          coupon code
                        </label>
                        <input
                          id="couponCode"
                          class="form-control"
                          type="text"
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <button
                        className="btn btn-success btn-lg d-block w-100"
                        type="button"
                        onClick={pay}
                      >
                        Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentWindow;
