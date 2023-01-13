import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import image from "../assets/img/AirBus1.jpg";
import "../assets/css/bkconfirm.css";
import moment from "moment";

function parseTime(timeString) {
  var date = new Date(timeString);
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);
  return hours + ":" + minutes;
}

function BookingConfirm(props) {
  //this receives data from flight table and cards
  const location = useLocation();

  const [userSelectedSeats, setUserSelectedSeats] = useState([]);
  const [userData, setUserData] = useState({});
  const [flightID, setFlightID] = useState();
  const [seatClass, setseatClass] = useState();
  const [loggedUserDetails, setloggedUserDetails] = useState([]);
  const [flightDetails, setflightDetails] = useState();
  const [discount, setdiscount] = useState();

  useEffect(() => {
    fetch("/api/getConfirmDetails", {
      method: "POST",
      body: JSON.stringify({
        flightID,
        userData,
        loggedUserDetails,
        userSelectedSeats,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      res.json().then((data) => {
        setflightDetails(data.flightdata);
        setdiscount(data.discount);
      })
    );
  }, [flightID, userData, loggedUserDetails]);

  useEffect(() => {
    setUserSelectedSeats(location.state.userSelectedSeats);
    setUserData(location.state.userData);
    setFlightID(location.state.flightID);
    setseatClass(location.state.seatClass);
    setloggedUserDetails([
      location.state.loggedUser,
      location.state.isloggeduserpassenger,
    ]);
  }, [location.state]);

  const submit = (e) => {

    fetch("/api/book", {
      method: "POST",
      body: JSON.stringify({ flightID, userSelectedSeats, userData }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json().then((data) => {}));

  };

  const dept_time = moment(
    flightDetails
      ? new Date(flightDetails.details.departure_time.slice(0, -1))
      : new Date()
  );
  const arr_time = moment(
    flightDetails
      ? new Date(flightDetails.details.arrival_time.slice(0, -1))
      : new Date()
  );

  const isNextDayArriving = !dept_time.isSame(arr_time, "day");
  let duration = moment.duration(arr_time.diff(dept_time));
  var hours = Math.floor(duration.asHours());
  var minutes = Math.floor(duration.asMinutes()) - hours * 60;
  duration = `${hours}H ${minutes}m`;

  let totalPrice =
    flightDetails && userSelectedSeats
      ? userSelectedSeats.length * flightDetails.details.cost
      : 0;

  return (
    <>
      <div>
        <div class="container bg-white rounded">
          <div class="row d-flex justify-content-center bg pb-5">
            <div class="col-sm-4 col-md-4 ml-1">
              <div class="d-flex flex-row py-4 pl-6">
                <h5>
                  <span class="fa fa-check-square-o"></span>
                  <b>Safe</b> |{" "}
                </h5>
                <span class="pl-2">Pay</span>
              </div>
              <div
                class="bg-white d-flex flex-column p-2"
                style={{ "border-radius": "20px", width: "332.513px" }}
              >
                <div class="text-center mt-4">
                  <img
                    class="img-fluid"
                    src={image}
                    width="200"
                    style={{ "margin-bottom": "16px" }}
                  />
                </div>
                <h5
                  style={{
                    "text-align": "center",
                    "font-size": "20px",
                    "font-weight": "bold",
                    height: "20",
                    "margin-bottom": "0px",
                  }}
                >
                  {flightDetails ? flightDetails.from[1] : ""} -{" "}
                  {flightDetails ? flightDetails.to[1] : ""}
                </h5>
                <p style={{ "text-align": "center", "margin-bottom": "13px" }}>
                  {flightDetails ? dept_time.format("dddd DD MMMM") : ""}
                </p>
                <b>
                  <span style={{ color: "rgb(63, 63, 63)" }}>
                    {flightDetails
                      ? parseTime(flightDetails.details.departure_time)
                      : ""}{" "}
                    &nbsp;
                    {flightDetails ? flightDetails.from[1] : ""}
                  </span>
                  <br />
                </b>
                <p>
                  <span style={{ color: "rgb(63, 63, 63)" }}>
                    {flightDetails ? flightDetails.from[0] : ""} (
                    {flightDetails
                      ? flightDetails.details.start_destination
                      : ""}
                    )
                  </span>
                  <br />
                </p>
                <b>
                  <span style={{ color: "rgb(63, 63, 63)" }}>
                    {flightDetails
                      ? parseTime(flightDetails.details.arrival_time)
                      : ""}{" "}
                    {isNextDayArriving ? "(+1Day)" : ""} Abu Dhabi
                    {/* {flightDetails ? arr_time.format("HH:") : ""} &nbsp; */}
                    {/* {flightDetails ? flightDetails.to[1] : ""} */}
                  </span>
                  <br />
                </b>
                <p>
                  {flightDetails ? flightDetails.to[0] : ""} (
                  {flightDetails ? flightDetails.details.end_destination : ""})
                </p>
                <h4
                  class="green"
                  style={{
                    color: "rgb(0,0,0)",
                    "font-size": "20px",
                    "font-family": "Helvetica",
                  }}
                ></h4>
              </div>
              <div
                class="bg-white d-flex flex-column p-2"
                style={{
                  "border-radius": "20px",
                  width: "332.513px",
                  marginTop: "10px",
                }}
              >
                <b>
                  <span style={{ color: "rgb(63, 63, 63)" }}>Duration</span>
                  <br />
                </b>
                <p>
                  <span style={{ color: "rgb(63, 63, 63)" }}> {duration}</span>
                  <br />
                </p>
                <b>
                  <span style={{ color: "rgb(63, 63, 63)" }}>Air Craft</span>
                  <br />
                </b>
                <p>
                  {flightDetails ? flightDetails.aircraftDetails.name : ""}
                  &nbsp; (
                  {flightDetails ? flightDetails.aircraftDetails.type : ""})
                </p>
                <b>
                  <span style={{ color: "rgb(63, 63, 63)" }}>Cabin</span>
                  <br />
                </b>
                <p>{seatClass}</p>
              </div>
            </div>
            <div class="col-sm-5 col-md-6 mobile">
              <div class="d-flex justify-content-end py-4">
                <h6
                  style={{ color: "#08575c", "text-decoration": "underline" }}
                >
                  <a class="link-href" href="#">
                    Cancel and return to website
                  </a>
                </h6>
              </div>
              <div
                class="bg-white d-flex flex-column p-3"
                style={{
                  "border-radius": "14px",
                  "margin-left": "100px",
                  "margin-right": "-100px",
                }}
              >
                <div class="pt-2">
                  <h5>Passengers</h5>
                </div>
                {flightDetails && userSelectedSeats
                  ? userSelectedSeats.map((seat, index) => {
                      return (
                        <div class="d-flex">
                          <div class="col-8">
                            <span>{userData[index].firstName}</span>
                          </div>
                          <div class="ml-auto">
                            <p
                              style={{
                                "margin-bottom": "-1px",
                                "text-align": "right",
                              }}
                            >
                              S{seat}
                            </p>
                          </div>
                          <div
                            class="ml-auto"
                            style={{ "text-align": "right" }}
                          >
                            <b>$ {flightDetails.details.cost}</b>
                          </div>
                        </div>
                      );
                    })
                  : ""}

                <div class="pt-2">
                  <h5>Total </h5>
                </div>
                <div class="d-flex">
                  <div class="col-8">
                    <span>Total Price</span>
                  </div>
                  <div class="ml-auto">
                    <p style={{ "margin-bottom": "-1px" }}></p>
                  </div>
                  <div class="ml-auto" style={{ "text-align": "right" }}>
                    <p style={{ "margin-bottom": "0px" }}>$ {totalPrice}</p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="col-8">
                    <span>Dicount</span>
                  </div>
                  <div class="ml-auto">
                    <p
                      style={{ "margin-bottom": "-1px", "text-align": "right" }}
                    >
                      {discount * 100}%
                    </p>
                  </div>
                  <div class="ml-auto" style={{ "text-align": "right" }}>
                    <p style={{ "margin-bottom": "0px" }}>
                      $ {discount * totalPrice}
                    </p>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="col-8">
                    <span>Final Price</span>
                  </div>
                  <div class="ml-auto">
                    <p style={{ "margin-bottom": "-1px" }}></p>
                  </div>
                  <div
                    class="ml-auto"
                    style={{
                      "text-align": "right",
                      "border-top-width": "1px",
                      "border-top-style": "solid",
                      "border-bottom-style": "double",
                    }}
                  >
                    <b>$ {totalPrice - discount * totalPrice}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row d-flex justify-content-center bg pb-5"
            style={{ "margin-top": "40px" }}
          >
            <div class="col">
              <b style={{ "font-size": "34px" }}>Choose Your Payment Method</b>
              <div style={{ "margin-right": "100px", "margin-left": "100px" }}>
                <div class="row cc-type-error">
                  <div id="ccOptions" class="container">
                    <div class="form-group">
                      <fieldset id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons">
                        <legend class="legend"></legend>
                        <div class="radio">
                          <input
                            id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons1"
                            name="ccTypesIcons"
                            aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons"
                            type="radio"
                          />
                          <label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons1">
                            <span class="plnext-sr-only">Visa</span>
                            <img
                              src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/card-visa.png"
                              alt="Visa"
                            />
                          </label>
                        </div>
                        <div class="radio">
                          <input
                            id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons2"
                            name="ccTypesIcons"
                            aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons"
                            type="radio"
                          />
                          <label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons2">
                            <span class="plnext-sr-only">MasterCard</span>
                            <img
                              src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/card-ms.png"
                              alt="MasterCard"
                            />
                          </label>
                        </div>
                        <div class="radio">
                          <input
                            id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons3"
                            name="ccTypesIcons"
                            aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons"
                            type="radio"
                          />
                          <label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons3">
                            <span class="plnext-sr-only">Amex</span>
                            <img
                              src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/card-amex.png"
                              alt="Amex"
                            />
                          </label>
                        </div>
                        <div class="radio">
                          <input
                            id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons4"
                            name="ccTypesIcons"
                            aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons"
                            type="radio"
                          />
                          <label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons4">
                            <span class="plnext-sr-only">Diners Club</span>
                            <img
                              src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/dinersClub.png"
                              alt="Diners Club"
                            />
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="container bg-white rounded"
          style={{ "margin-top": "40px" }}
        >
          <button
            class="btn btn-primary btn btn-theme"
            type="button"
            style={{
              width: "137.6625px",
              height: "50px",
              "font-size": "20px",
              "font-weight": "bold",
              "font-family": "NExa",
              "margin-left": "900px",
              "margin-right": "0px",
              "padding-right": "8px",
            }}
            onClick={submit}
          >
            Checkout
          </button>
        </div>
        <div class="container bg-white rounded">
          <div
            class="bg-white d-flex flex-column mt-4 p-3"
            style={{ "border-radius": "14px" }}
          >
            <div class="pt-2">
              <h5>
                Important
                <br />
              </h5>
            </div>
            <div class="pl-2">
              <div>
                <span>
                  <br />
                  The class payment confirmation process will take about 20
                  minutes (from the WhatsApp message sent). Please wait
                  patiently and thank you.
                  <br />
                </span>
              </div>
            </div>
            <div class="pt-2">
              <h5>
                <br />
                Need help? Contact Us
                <br />
                <br />
              </h5>
            </div>
            <div class="d-flex">
              <div class="col-8">
                <span>Admin</span>
              </div>
              <div class="ml-auto">
                <span>Amila</span>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-8">
                <span>No. WhatsApp</span>
              </div>
              <div class="ml-auto">
                <b>+94772626113</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingConfirm;
