import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import image from "../assets/img/AirBus1.jpg";
import "../assets/css/countdown-timer.css";

import moment from "moment";

function PaymentWindow(props) {
  const location = useLocation();

  return (
    <div style={{margin: "10px"}}>
      <div class="container" style={{ height: "100px", width: "inherit", "margin-left":"200px" }}>
        <div id="clockdiv">

          <div class="clock-wrapper">
            <span class="minutes"> </span>
            <div class="smalltext">
              <p>Minutes </p>
            </div>
          </div>
          <div class="clock-wrapper">
            <span class="seconds"> </span>
            <div class="smalltext">
              <p>Seconds </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row .payment-dialog-row">
        <div class="col-12 col-md-4 offset-md-4">
          <div class="card credit-card-box">
            <div class="card-header">
              <h3>
                <span class="panel-title-text">Payment Details </span>
                <img
                  class="img-fluid panel-title-image"
                  src="accepted_cards.png"
                />
              </h3>
            </div>
            <div class="card-body">
              <form id="payment-form">
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
                      <input id="couponCode" class="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button
                      class="btn btn-success btn-lg d-block w-100"
                      type="submit"
                    >
                      Start Subscription
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentWindow;
