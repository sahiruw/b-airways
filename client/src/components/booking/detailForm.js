import React from "react";
import { useState, useEffect, useMemo } from "react";
import Form from "react-bootstrap/Form";
import MuiPhoneNumber from "material-ui-phone-number";
import CountrySelection from "./countrySelect";

const DetailForm = (props) => {
  const [isRegisteredUser, setIsRegisteredUser] = useState(false);

  const fillFirstWithUser = props.isloggeduserpassenger && props.id == 0;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "LK",
    country: "Sri Lanka",
    isRegistered: props.isRegisteredUser,
    passport: "",
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
          const dateFromMySQL = data.data.dob;
          const formattedDate = new Date(dateFromMySQL)
            .toISOString()
            .substring(0, 10);

          setForm({
            ...form,
            firstName: data.data.firstname,
            lastName: data.data.lastname,
            email: em,
            isRegistered: true,
            passport: data.data.passport_number,
            country: data.data.country,
            birthday: formattedDate,
            phone: data.data.tele_no,
          });
        } else {
          setIsRegisteredUser(false);
          setForm({
            ...form,
            firstName: "",
            lastName: "",
            email: em,
            isRegistered: false,
            passport: "",
            country: "Sri Lanka",
            birthday: "",
            phone: "",
          });
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
                value={form.passport}
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
                disabled={isRegisteredUser ? "disabled" : ""}
                onChange={(e) => {
                  setForm({ ...form, birthday: e.target.value });
                }}
              />
            </div>
          </div>

          <div class="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="selected-country">Country</label>
              <CountrySelection
                form={form}
                setForm={setForm}
                disabled={isRegisteredUser ? "disabled" : ""}
                value={form.country}
              
              />
            </div>
            <div className="mb-3 col-md-6">
              <label>Phone Number</label>
              <div> {form.phone}
                <MuiPhoneNumber
                  defaultCountry={form.countryCode.toLowerCase()}
                  disableAreaCodes={true}
                  disabled={isRegisteredUser ? "disabled" : ""}
                  value={form.phone}
                  onChange={(value) => {
                    setForm({ ...form, phone: value });
                  }}
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
