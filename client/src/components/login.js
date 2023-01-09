import React, { Component } from "react";
import { useState } from "react";

import background from "./assets/img/Vish_high_quality_realistic_inside_a_aeroplan_business_class_ca_cbde7130-06ff-4ddd-aad0-85fdcdeed2ce.png";
import logo from "./assets/img/Logo.png";

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

    if (type === "success") document.location.replace("/");
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
    <div
      class="container"
      style={{
        width: "100%",
        height: "100%",
        background: "url('" + background + "') center / cover no-repeat",
        "margin-bottom": "36px",
      }}
    >
      <div class="container-fluid">
        <div class="row mh-100vh">
          <div
            id="login-block"
            class="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 d-lg-flex align-self-center align-items-lg-center align-self-lg-stretch bg-white p-5 rounded .landing-threshold rounded-lg-0 my-5 my-lg-0"
            style={{
              transform: "rotate(0deg) scale(0.70)",
              background: "rgba(255,255,255,0.47)",
              "margin-right": "366px",
              "margin-left": "364px",
              height: "747px",
            }}
          >
            <div
              class="m-auto w-lg-75 w-xl-50"
              style={{ transform: "scale(1.75)" }}
            >
              <h2 class="fw-light text-info mb-5">
                <img
                  width="60"
                  height="36"
                  style={{
                    display: "flex",
                    width: "60px",
                    height: "36px",
                    "padding-top": "0px",
                    transform: "scale(1.97)",
                    "padding-right": "0px",
                    "margin-top": "0px",
                    "margin-right": "118px",
                    "margin-left": "118px",
                  }}
                  src={logo}
                />
              </h2>
              <form>
                <div class="form-group mb-3">
                  <label
                    class="form-label text-secondary form-label"
                    style={{ "font-family": "nexa" }}
                  >
                    Email
                  </label>
                  <input
                    class="form-control form-control"
                    type="text"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$"
                    onChange={(e) => {
                      setForm({
                        ...form,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div class="form-group mb-3">
                  <label
                    class="form-label text-secondary form-label"
                    style={{ "font-family": "nexa" }}
                  >
                    Password
                  </label>
                  <input
                    class="form-control form-control"
                    type="password"
                    required
                    onChange={(e) => {
                      setForm({
                        ...form,
                        pass: e.target.value,
                      });
                    }}
                  />
                </div>

                <button
                  class="btn btn-info mt-2"
                  type="submit"
                  style={{
                    background: "#08575c",
                    "--bs-body-color": "#ffffff",
                    color: "rgb(255,255,255)",
                    "font-weight": "bold",
                    "background-position": "50% 50%",
                  }}
                  onClick={(e) => submit(e)}
                >
                  Log In
                </button>
              </form>
              <p class="mt-3 mb-0">
                <a
                  class="text-info small"
                  href="#"
                  style={{ "font-family": "nexa" }}
                >
                  Forgot your email or password?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
