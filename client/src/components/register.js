import React, { Component } from "react";
import { useState ,useEffect} from "react";

const Register = () => {

  useEffect(() => {
    fetch("/api/isLogged")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          document.location.replace('/')
        }
      });
  });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
  });

  const [alert, setAlert] = useState({
    atype: "",
    aalert: { display: "none" },
    amessage: "",
  });

  const sendMessage = (text, type = "danger", time = 5) => {
    setAlert({
      atype: type,
      aalert: { display: "block" },
      amessage: text,
    });

    setTimeout(() => {
      setAlert({ ...alert, aalert: { display: "none" } });
      if (type === "success") document.location.replace('/login')
    }, time * 1000);
  };

  const submit = (e) => {
    e.preventDefault();
    if (form.email.length < 5 || form.pass.length < 3) {
      return sendMessage("Please fille the form correctly!");
    }
    let username = form.email;
    let pass = form.pass;
    
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ username, pass}),
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      res.json().then((data) => {
        if (data.status) {
          sendMessage(data.message, "success");
        } else {
          sendMessage(data.message);
        }
      })
    );
  };
  const style_card = {
    marginTop : 30,
    width : 935,
    marginLeft : 300,
    marginRight : 300,
    height : 650,
    paddingTop : 20
    

};


  return (

    <div className="shadow-lg p-3 mb-5 bg-white rounded" style={style_card}>
      <form style={{padding:10,marginLeft:400,margin:100,width:700}}>
      <h3>Sign Up</h3>
      <div
        class={`alert alert-${alert.atype}`}
        role="alert"
        style={alert.aalert}
      >
        {alert.amessage}
      </div>

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
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
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => {
            setForm({
              ...form,
              pass: e.target.value,
            });
          }}
        />
      </div>
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-outline-primary"
          style={{marginTop:10}}
          onClick={(e) => submit(e)}
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </form>
    </div>
    
    
  );
};

export default Register;
