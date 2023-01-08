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
    // <>
    //   <section className="position-relative py-4 py-xl-5">
    //     <div className="container">
    //       <div className="row mb-5">
    //         <div className="col-md-8 col-xl-6 text-center mx-auto">
    //           <h2>Log in</h2>
    //           <p className="w-lg-50">
    //             Fill out the email and password fields to proceed the login process
    //           </p>
    //         </div>
    //       </div>
    //       <div className="row d-flex justify-content-center">
    //         <div className="col-md-6 col-xl-4">
    //           <div className="card mb-5">
    //             <div className="card-body d-flex flex-column align-items-center">
    //               <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="1em"
    //                   height="1em"
    //                   fill="currentColor"
    //                   viewBox="0 0 16 16"
    //                   className="bi bi-person"
    //                 >
    //                   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
    //                 </svg>
    //               </div>

    //               <div className={"alert alert-" + alert.atype} role="alert" style={alert.aalert}>
    //                 {alert.amessage}
    //               </div>

    //               <form className="text-center" method="post">
    //                 <div className="mb-3">
    //                   <input
    //                     className="form-control"
    //                     type="email"
    //                     name="email"
    //                     placeholder="Email"
    //                     onChange={(e) => {
    //                       setForm({
    //                         ...form,
    //                         email: e.target.value,
    //                       });
    //                     }}
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <input
    //                     className="form-control"
    //                     type="password"
    //                     name="password"
    //                     placeholder="Password"
    //                     onChange={(e) => {
    //                       setForm({
    //                         ...form,
    //                         pass: e.target.value,
    //                       });
    //                     }}
    //                   />
    //                 </div>
    //                 <div className="mb-3">
    //                   <button
    //                     className="btn btn-primary d-block w-100"
    //                     type="submit"
    //                     onClick={(e) => submit(e)}
    //                   >
    //                     Login
    //                   </button>
    //                 </div>
    //                 <p className="text-muted">Forgot your password?</p>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
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
