import React, { Component } from "react";
import { useState, useEffect } from "react";

const DetailForm = (props) => {
  const [isRegisteredUser, setIsRegisteredUser] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    props.setudata({ ...props.udata, [props.id]: form });
  });


  const onemailChange = (em) => {
    setForm({ ...form,email: em,});

    fetch("/api/getuserbyusername?email=" + em)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      if (data.status) {
        setIsRegisteredUser(true);
        setForm({
            ...form,
          firstName: data.data.firstname,
          lastName: data.data.lastname,
        })
      }
      else {
        setIsRegisteredUser(false)
        setForm({...form,firstName:"",lastName:""})
    }
    });


  }

  return (
    <div id={"user" + props.id} className={"shadow-lg p-3 mb-5 bg-" + (isRegisteredUser?"success":"white") + " rounded"}>
      <form style={{ padding: 20, marginLeft: 400, margin: 2, width: 900 }}>
        <h5>Fill with the details of user {isRegisteredUser? "Registered User":"Not a registered user"}</h5>
        <br/>

        <div className="mb-3">
          <label>Email address</label>
          <p><small>Enter the email of the passenger in the following space. If he/she is a registered user, their details will be autofilled</small></p>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => onemailChange(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            disabled={isRegisteredUser? "disabled": ""}
            value={form.firstName}
            onChange={(e) => {
              setForm({
                ...form,
                firstName: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            disabled={isRegisteredUser? "disabled": ""}
            value={form.lastName}
            onChange={(e) => {
              setForm({
                ...form,
                lastName: e.target.value,
              });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default DetailForm;
