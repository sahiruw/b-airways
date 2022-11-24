import React, { Component } from "react";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
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

    if (type === "success") document.location.replace("/")
    setTimeout(() => {
      setAlert({ ...alert, aalert: { display: "none" } });
    }, time * 1000);
  };

  const submit = (e) => {
    e.preventDefault();
    let username = form.email;
    let password = form.pass;

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
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

  return (
    <form>
      <h3>Sign Up</h3>
      <div
        class={`alert alert-${alert.atype}`}
        role="alert"
        style={alert.aalert}
      >
        {alert.amessage}
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
          className="btn btn-primary"
          onClick={(e) => submit(e)}
        >
          Sign In
        </button>
      </div>
      <p className="forgot-password text-right">
        Not yet registered <a href="/register">sign up?</a>
      </p>
    </form>
  );
};

export default Login;
