import React, { Component } from "react";
import { useState, useEffect, useMemo } from "react";
import countryList from "react-select-country-list";
import Form from "react-bootstrap/Form";
import MuiPhoneNumber from "material-ui-phone-number";

const DetailForm = (props) => {
  const [isRegisteredUser, setIsRegisteredUser] = useState(false);
  const excludeCountries = [
    "Western Sahara",
    "United States Minor Outlying Islands",
    "Svalbard and Jan Mayen",
    "South Georgia and the South Sandwich Islands",
    "Sint Maarten (Dutch part)",
    "Pitcairn",
    "Montserrat",
    "Montenegro",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Mayotte",
    "Mauritius",
    "Mauritania",
    "Martinique",
    "Isle of Man",
    "Åland Islands",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "British Indian Ocean Territory",
    "Antarctica",
    "Bouvet Island",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "French Southern Territories",
    "French Polynesia",
    "Guernsey",
    "Heard Island and McDonald Islands",
    "Jersey",
  ];

  const countries = useMemo(
    () =>
      countryList()
        .getData()
        .map((r) => r.label)
        .filter((x) => !excludeCountries.includes(x)),
    []
  );

  const countryCodes = useMemo(
    () =>
      countryList()
        .getData()
        .map((r) => [r.label, r.value]),
    []
  );

  const fillFirstWithUser = props.isloggeduserpassenger && props.id == 0;

  const handleChange = (event) => {
    let code = countryCodes.filter((r) => r[0] == event.target.value)[0][1];
    setForm({ ...form, country: event.target.value, countryCode: code });
  };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "LK",
    country: "Sri Lanka",
  });

  useEffect(() => {
    props.setudata({ ...props.udata, [props.id]: form });
  }, [form]);

  useEffect(() => {
    if (fillFirstWithUser) {
      setForm({
        ...form,
        email: props.loggedUserEmail,
      });
      onemailChange(props.loggedUserEmail);
    } else if (props.id == 0) {
      setForm({
        ...form,
        email: "",
      });
      document.getElementById("useremail").value = "";
      onemailChange("");
    }
  }, [props.isloggeduserpassenger]);

  const onemailChange = (em) => {
    setForm({ ...form, email: em });

    fetch("/api/getuserbyusername?email=" + em)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setIsRegisteredUser(true);
          setForm({
            ...form,
            firstName: data.data.firstname,
            lastName: data.data.lastname,
            email: em,
          });
        } else {
          setIsRegisteredUser(false);
          setForm({ ...form, firstName: "", lastName: "", email: em });
        }
      });
  };

  return (
    <div
      id={"user" + props.id}
      className={
        "shadow-lg p-3 mb-5 bg-" +
        (isRegisteredUser ? "success" : "white") +
        " rounded"
      }
    >
      <form style={{ padding: 20, marginLeft: 400, margin: 2, width: 900 }}>
        <h5>
          Fill with the details of user{" "}
          {isRegisteredUser ? "Registered User" : "Not a registered user"}
        </h5>
        <br />
        <div class="container">
          <div className="mb-3">
            <label>Email address</label>
            <p>
              <small>
                Enter the email of the passenger in the following space. If
                he/she is a registered user, their details will be autofilled
              </small>
            </p>
            <input
              id="useremail"
              type="email"
              className="form-control"
              placeholder="Enter email"
              // {fillFirstWithUser?"value=":undefined}
              onChange={(e) => onemailChange(e.target.value)}
              // value = {form.email}
              {...(fillFirstWithUser ? { value: form.email } : {})}
            />
          </div>
          <div class="row">
            <div className="mb-3 col-md-6">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                disabled={isRegisteredUser ? "disabled" : ""}
                value={form.firstName}
                onChange={(e) => {
                  setForm({
                    ...form,
                    firstName: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                disabled={isRegisteredUser ? "disabled" : ""}
                value={form.lastName}
                onChange={(e) => {
                  setForm({
                    ...form,
                    lastName: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div class="row">
            <div className="mb-3 col-md-6">
              <label>Passport Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Passport Number"
                disabled={isRegisteredUser ? "disabled" : ""}
                value={form.firstName}
                onChange={(e) => {
                  setForm({
                    ...form,
                    passport: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label>Birthday</label>
              <Form.Control
                type="date"
                name="date_of_birth"
                value={form.birthday}
                onChange={(e) => {
                  setForm({ ...form, birthday: e.target.value });
                }}
              />
            </div>
          </div>

          <div class="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="selected-country">Country</label>
              <select
                className="form-select"
                id="selected-country"
                value={form.country}
                onChange={handleChange}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3 col-md-6">
              <label>Phone Number</label>
              {form.countryCode}
              <div>
                <MuiPhoneNumber
                  defaultCountry={form.countryCode.toLowerCase()}
                  disableAreaCodes={true}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DetailForm;
