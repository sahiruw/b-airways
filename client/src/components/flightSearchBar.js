import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./assets/css/styles.css";

function SearchBar(props) {
  const [Airports, setAirports] = useState([]);
  const [FlightList, setFlightList] = useState([]);

  const [Form, setForm] = useState({});

  useEffect(() => {
    setForm(props.selectedValues);
  }, [props.selectedValues]);

  useEffect(() => {
    fetch("/api/departure")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setAirports(data.data);
        }
      });
  });

  const navigate = useNavigate();

  const ShowBySearch = (e) => {
    e.preventDefault();

    if (!Form || !Form.from || !Form.to || !Form.date || !Form.seat_type) {
      alert("Please fill all the fields");
      console.log("Please fill all the fields");

      return;
    }
    if (!Form.passengerCount) {
      setForm({ ...Form, passengerCount: 1 });
    }

    fetch(
      `/api/Flights?from=${Form.from}&to=${Form.to}&departureDate=${Form.date}&seat_type=${Form.seat_type}&passengers=${Form.passengerCount}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFlightList(data.flightdata);

        navigate("/table", {
          state: { Tabledata: data.flightdata, form: Form },
        });
      });
  };

  const style_search_bar = {
    width: 1350,
    marginLeft: 50,
    marginTop: 10,
  };

  const style_class_search = {
    width: 190,
    padding: 5,
  };

  return (
    // <div>
    //   <div
    //     className="row shadow-lg p-3 mb-5 bg-white rounded"
    //     style={style_search_bar}
    //   >
    //     <select
    //       className="col-2"
    //       onChange={(e) => {
    //         setForm({ ...Form, from: e.target.value });
    //       }}
    //       value= {Form? Form.from : ""}
    //     >
    //       {Airports.map((val) => {
    //         return <option value={val.code}>{val.code}</option>;
    //       })}
    //     </select>

    //     <select
    //       className="col-2"
    //       onChange={(e) => {
    //         setForm({ ...Form, to: e.target.value });
    //       }}
    //       value= {Form? Form.to : ""}
    //     >
    //       {Airports.map((val) => {
    //         return <option value={val.code}>{val.code}</option>;
    //       })}
    //     </select>

    //     <select
    //       className="from-select col-2"
    //       aria-label="Defaul select example"
    //       style={style_class_search}
    //       onChange={(e) => {
    //         setForm({ ...Form, seat_type: e.target.value });
    //       }}
    //       value= {Form? Form.seat_type : ""}
    //     >
    //       <option selected>Class</option>
    //       <option value={"Bussiness"}>Business</option>
    //       <option value={"Economy"}>Economy</option>
    //       <option value={"Platinum"}>Platinum</option>
    //     </select>
    //     <input
    //       className="col-2"
    //       type="number"
    //       placeholder="Passengers"
    //       onChange={(e) => {
    //         setForm({ ...Form, passengerCount: e.target.value });
    //       }}
    //       value= {Form? Form.passengerCount : 1}
    //     ></input>

    //     <input
    //       className="col-2"
    //       type="date"
    //       onChange={(e) => {
    //         setForm({ ...Form, date: e.target.value });
    //       }}
    //     //   defaultValue= {Form? Form.date : ""}
    //     ></input>
    //     <button
    //       className="btn btn-outline-secondary mx-4 col-2"
    //       style={{ width: 200 }}
    //       onClick={(e) => ShowBySearch(e)}
    //     >
    //       Search
    //     </button>
    //   </div>
    // </div>
    <div class="landing-threshold" style={{width : "100%"}}>
      <div class="container-fluid">
        <div class="container-rempadresponsive">
          <ul
            class="wizardpane nav-fill"
            style={{
              "margin-bottom": "0",
              "list-style": "none",
              position: "relative",
              background: "linear-gradient(to left,#095f65,#064c50 70%)",
              width: "100%",
              "border-top-left-radius": "20px",
              "border-top-right-radius": "20px",
            }}
          >
            <li class="searchbutton-mid">
              <a
                class="searchlink-mid"
                href="#"
                style={{
                  "font-weight": "400",
                  "font-family": "nexa",
                  "list-style": "none",
                  "text-align": "center",
                  "box-sizing": "border-box",
                  "background-color": "transparent",
                  "text-decoration": "none",
                  "-webkit-transition": ".5s all",
                  display: "block",
                  color: "white",
                  "background-position": "24% center",
                  padding: "12px 15px 13px 15px",
                  border: "0",
                  "border-radius": "0",
                  "font-size": "var(--font-m)",
                  "line-height": "1.5",
                  "padding-left": "0px",
                  "padding-right": "45px",
                }}
              >
                Book
                <i
                  class="fa fa-plane"
                  style={{
                    "margin-right": "-74px",
                    "padding-right": "0px",
                    "margin-left": "13px",
                    "border-color": "#ffffff",
                    color: "#ffffff",
                    "padding-bottom": "0",
                    "margin-bottom": "0",
                    "padding-top": "0",
                    "--bs-body-bg": "#ffffff",
                  }}
                ></i>
              </a>
            </li>
          </ul>
          <div
            class="tab-content"
            style={{
              "font-size": "100%",
              "font-family": "nexa",
              position: "relative",
              width: "100%",
              padding: "15px 18px",
              background: "#fff",
            }}
          >
            <div
              class="tab-active-book"
              style={{
                "font-weight": "400",
                "line-height": "1.5",
                "text-align": "left",
                "font-size": "100%",
                "font-family": "nexa",
                color: "var(--primary1)",
                "box-sizing": "border-box",
                display: "block",
              }}
            >
              <div
                class="flights-search-from"
                style={{
                  "font-weight": "400",
                  "line-height": "1.5",
                  "text-align": "left",
                  "font-size": "100%",
                  "font-family": "nexa",
                  color: "#064c50",
                  "box-sizing": "border-box",
                  "flex-wrap": "wrap",
                  "margin-right": "0",
                  "margin-bottom": "0",
                  "margin-left": "0",
                  "margin-top": "1rem",
                  display: "flex",
                  position: "relative",
                }}
              >
                <div class="col-12 col-md-3 d-flex bk-search-block">
                  <div class="d-flex qr-datepicker">
                    <div class="bk-search-block-1">
                      <div class="bk-search-block-2">
                        <span class="t-class-info">From</span>
                        <select onChange={(e) => {
                            setForm({ ...Form, from: e.target.value });
                          }}
                            value= {Form? Form.from : ""}>
                          <optgroup label="Country">
                          {Airports.map((val) => {
                                  return <option value={val.code}>{val.code}</option>;
                               })}
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 d-flex bk-search-block">
                  <div class="d-flex qr-datepicker">
                    <div class="bk-search-block-1">
                      <div class="bk-search-block-2">
                        <span class="t-class-info">To</span>
                        <select onChange={(e) => {
                              setForm({ ...Form, to: e.target.value });
                                  }}
                             value= {Form? Form.to : ""}>
                          <optgroup label="Country">
                          {Airports.map((val) => {
                             return <option value={val.code}>{val.code}</option>;
                                 })}
                              
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 d-flex bk-search-block">
                  <div class="d-flex qr-datepicker">
                    <div class="bk-search-block-1">
                      <div class="bk-search-block-2">
                        <input class="t-day-check-in" type="date" onChange={(e) => {
                              setForm({ ...Form, date: e.target.value });
                                }}
                                   defaultValue= {Form? Form.date : ""}/>
                        <span class="t-class-info">Date</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 d-flex bk-search-block">
                  <div class="d-flex qr-datepicker">
                    <div class="bk-search-block-1">
                      <div class="bk-search-block-2">
                        <span class="t-class-info">Passengers</span>
                        <input type="number" min="1" max="9" onChange={(e) => {
                                      setForm({ ...Form, passengerCount: e.target.value });
                                  }}
                         value= {Form? Form.passengerCount : 1}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 d-flex bk-search-block">
                  <div class="d-flex qr-datepicker">
                    <div class="bk-search-block-1">
                      <div class="bk-search-block-2">
                        <span class="t-class-info">Class</span>
                        <select onChange={(e) => {
                              setForm({ ...Form, seat_type: e.target.value });
                                    }}
                             value= {Form? Form.seat_type : ""}>
                          <optgroup label="Country">
                            <option value={"Economy"}>Economy</option>
                            <option value={"Bussiness"} selected>
                              Business
                            </option>
                            <option value={"Platinum"}>Platinum</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="btn btn-light action-button btn-theme btn-index-search"
            role="button"
            onClick={(e) => ShowBySearch(e)}
          >
            Search
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
