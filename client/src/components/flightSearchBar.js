import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <div
        className="row shadow-lg p-3 mb-5 bg-white rounded"
        style={style_search_bar}
      >
        <select
          className="col-2"
          onChange={(e) => {
            setForm({ ...Form, from: e.target.value });
          }}
          value= {Form? Form.from : ""}
        >
          {Airports.map((val) => {
            return <option value={val.code}>{val.code}</option>;
          })}
        </select>

        <select
          className="col-2"
          onChange={(e) => {
            setForm({ ...Form, to: e.target.value });
          }}
          value= {Form? Form.to : ""}
        >
          {Airports.map((val) => {
            return <option value={val.code}>{val.code}</option>;
          })}
        </select>

        <select
          className="from-select col-2"
          aria-label="Defaul select example"
          style={style_class_search}
          onChange={(e) => {
            setForm({ ...Form, seat_type: e.target.value });
          }}
          value= {Form? Form.seat_type : ""}
        >
          <option selected>Class</option>
          <option value={"Bussiness"}>Business</option>
          <option value={"Economy"}>Economy</option>
          <option value={"Platinum"}>Platinum</option>
        </select>
        <input
          className="col-2"
          type="number"
          placeholder="Passengers"
          onChange={(e) => {
            setForm({ ...Form, passengerCount: e.target.value });
          }}
          value= {Form? Form.passengerCount : 1}
        ></input>

        <input
          className="col-2"
          type="date"
          onChange={(e) => {
            setForm({ ...Form, date: e.target.value });
          }}
        //   defaultValue= {Form? Form.date : ""}
        ></input>
        <button
          className="btn btn-outline-secondary mx-4 col-2"
          style={{ width: 200 }}
          onClick={(e) => ShowBySearch(e)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
