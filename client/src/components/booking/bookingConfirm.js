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
  const navigate = useNavigate();
  
  const [userSelectedSeats, setUserSelectedSeats] = useState([]);
  const [userData, setUserData] = useState({});
  const [flightID, setFlightID] = useState();
  const [seatClass, setseatClass] = useState();
  const [loggedUserDetails, setloggedUserDetails] = useState([]);
  const [flightDetails, setflightDetails] = useState();
  const [discount, setdiscount] = useState();
  const [bookingId, setbookingId] = useState();
  const [finalPrice, setFinalPrice] = useState(0);
  const [paymentType, setPaymentType] = useState("");

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
        let cost1 = userSelectedSeats.length * data.flightdata.details.cost;
        let cost2 = cost1 - data.discount * cost1
        setFinalPrice(cost2)
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
    const currentTime = new Date().toISOString().slice(0,19).replace('T',' ');
    let userCount = userSelectedSeats.length

    fetch("/api/book", {
      method: "POST",
      body: JSON.stringify({ flightID, userSelectedSeats, userData, seatClass , currentTime, userCount}),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json().then((data) => {
      console.log(data)
      if(data.status){
        setbookingId(data.bookingID)
        toPayment(data.bookingID)
      }
    }));

    const toPayment = (bID) => {
      
        navigate("/payment", {
          state: {
            flightID: flightID,
            bookingId: bID,
            finalPrice: finalPrice,
          },
        });

    };
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
        <div className="container bg-white rounded">
          <div className="row d-flex justify-content-center bg pb-5">
            <div className="col-sm-4 col-md-4 ml-1">
              <div className="d-flex flex-row py-4 pl-6">
                <h5>
                  <span className="fa fa-check-square-o"></span>
                  <b>Safe</b> |{" "}
                </h5>
                <span className="pl-2">Pay</span>
              </div>
              <div
                className="bg-white d-flex flex-column p-2"
                style={{ "borderRadius": "20px", width: "332.513px" }}
              >
                <div className="text-center mt-4">
                  <img
                    className="img-fluid"
                    src={image}
                    width="200"
                    style={{ "marginBottom": "16px" }}
                  />
                </div>
                <h5
                  style={{
                    "textAlign": "center",
                    "fontSize": "20px",
                    "fontWeight": "bold",
                    height: "20",
                    "marginBottom": "0px",
                  }}
                >
                  {flightDetails ? flightDetails.from[1] : ""} -{" "}
                  {flightDetails ? flightDetails.to[1] : ""}
                </h5>
                <p style={{ "textAlign": "center", "marginBottom": "13px" }}>
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
                  className="green"
                  style={{
                    color: "rgb(0,0,0)",
                    "fontSize": "20px",
                    "fontFamily": "Helvetica",
                  }}
                ></h4>
              </div>
              <div
                className="bg-white d-flex flex-column p-2"
                style={{
                  "borderRadius": "20px",
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
            <div className="col-sm-5 col-md-6 mobile">
              <div className="d-flex justify-content-end py-4">
                <h6
                  style={{ color: "#08575c", "textDecoration": "underline" }}
                >
                  <a className="link-href" href="/">
                    Cancel and return to website
                  </a>
                </h6>
              </div>
              <div
                className="bg-white d-flex flex-column p-3"
                style={{
                  "borderRadius": "14px",
                  "marginLeft": "100px",
                  "marginRight": "-100px",
                }}
              >
                <div className="pt-2">
                  <h5>Passengers</h5>
                </div>
                {flightDetails && userSelectedSeats
                  ? userSelectedSeats.map((seat, index) => {
                      return (
                        <div className="d-flex">
                          <div className="col-8">
                            <span>{userData[index].firstName}</span>
                          </div>
                          <div className="ml-auto">
                            <p
                              style={{
                                "marginBottom": "-1px",
                                "textAlign": "right",
                              }}
                            >
                              S{seat}
                            </p>
                          </div>
                          <div
                            className="ml-auto"
                            style={{ "textAlign": "right" }}
                          >
                            <b>$ {flightDetails.details.cost}</b>
                          </div>
                        </div>
                      );
                    })
                  : ""}

                <div className="pt-2">
                  <h5>Total </h5>
                </div>
                <div className="d-flex">
                  <div className="col-8">
                    <span>Total Price</span>
                  </div>
                  <div className="ml-auto">
                    <p style={{ "marginBottom": "-1px" }}></p>
                  </div>
                  <div className="ml-auto" style={{ "textAlign": "right" }}>
                    <p style={{ "marginBottom": "0px" }}>$ {totalPrice}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-8">
                    <span>Dicount</span>
                  </div>
                  <div className="ml-auto">
                    <p
                      style={{ "marginBottom": "-1px", "textAlign": "right" }}
                    >
                      {discount * 100}%
                    </p>
                  </div>
                  <div className="ml-auto" style={{ "textAlign": "right" }}>
                    <p style={{ "marginBottom": "0px" }}>
                      $ {discount * totalPrice}
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-8">
                    <span>Final Price</span>
                  </div>
                  <div className="ml-auto">
                    <p style={{ "marginBottom": "-1px" }}></p>
                  </div>
                  <div
                    className="ml-auto"
                    style={{
                      "textAlign": "right",
                      "borderTopWidth": "1px",
                      "borderTopStyle": "solid",
                      "borderBottomStyle": "double",
                    }}
                  >
                    <b>$ {totalPrice - discount * totalPrice}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row d-flex justify-content-center bg pb-5"
            style={{ "margin-top": "40px" }}
          >
            <div className="col">
              <b style={{ "fontSize": "34px" }}>Choose Your Payment Method</b>
              <div style={{ "marginRight": "100px", "marginLeft": "100px" }}>
                <div className="row cc-type-error">
                  <div id="ccOptions" className="container">
                    <div className="form-group">
                      <fieldset id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons">
                        <legend className="legend"></legend>
                        <div className="radio">
                          <input
                            id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons1"
                            name="ccTypesIcons"
                            aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons"
                            type="radio"
                            onChange={(e) => {console.log(e.target.value)}}
                          />
                          <label htmlFor="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons1">
                            <span className="plnext-sr-only">Visa</span>
                            <img
                              src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/card-visa.png"
                              alt="Visa"
                            />
                          </label>
                        </div>
                        <div className="radio">
                          <input
                            id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons2"
                            name="ccTypesIcons"
                            aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons"
                            type="radio"
                          />
                          <label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons2">
                            <span className="plnext-sr-only">MasterCard</span>
                            <img
                              src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/card-ms.png"
                              alt="MasterCard"
                            />
                          </label>
                        </div>
                        <div className="radio">
                          <input
                            id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons3"
                            name="ccTypesIcons"
                            aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons"
                            type="radio"
                          />
                          <label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons3">
                            <span className="plnext-sr-only">Amex</span>
                            <img
                              src="https://book.srilankan.com/plnext/default/plnext_git_22.6.7/static/plnextv2/resources/img/creditCard/card-amex.png"
                              alt="Amex"
                            />
                          </label>
                        </div>
                        <div className="radio">
                          <input
                            id="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons4"
                            name="ccTypesIcons"
                            aria-describedby="tpl6_fopTemplate_error-message-purchaseForm-paymentForm-ccTypesIcons"
                            type="radio"
                          />
                          <label for="tpl6_fopTemplate_widget-input-purchaseForm-paymentForm-ccTypesIcons-ccTypesIcons4">
                            <span className="plnext-sr-only">Diners Club</span>
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
          className="container bg-white rounded"
          style={{ "margin-top": "40px" }}
        >
          <button
            className="btn btn-primary btn btn-theme"
            type="button"
            style={{
              width: "137.6625px",
              height: "50px",
              "fontSize": "20px",
              "fontWeight": "bold",
              "fontFamily": "NExa",
              "marginLeft": "900px",
              "marginRight": "0px",
              "padding-right": "8px",
            }}
            onClick={submit}
          >
            Checkout
          </button>
        </div>
        <div className="container bg-white rounded">
          <div
            className="bg-white d-flex flex-column mt-4 p-3"
            style={{ "borderRadius": "14px" }}
          >
            <div className="pt-2">
              <h5>
                Important
                <br />
              </h5>
            </div>
            <div className="pl-2">
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
            <div className="pt-2">
              <h5>
                <br />
                Need help? Contact Us
                <br />
                <br />
              </h5>
            </div>
            <div className="d-flex">
              <div className="col-8">
                <span>Admin</span>
              </div>
              <div className="ml-auto">
                <span>Amila</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-8">
                <span>No. WhatsApp</span>
              </div>
              <div className="ml-auto">
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
