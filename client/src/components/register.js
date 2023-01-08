import React, { Component } from "react";
import { useState ,useEffect} from "react";
import "./assets/css/Signup-page-with-overlay.css";
import "./assets/css/styles.css";
import "./assets/css/Landing-Section-with-Call-to-Action-BS4.css"
import "./assets/css/Sakae-Simple-Section.css";



const Register = () => {

  useEffect(() => {
    fetch("/api/isLogged")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          //document.location.replace('/')
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

    // <div className="shadow-lg p-3 mb-5 bg-white rounded" style={style_card}>
    //   <form style={{padding:10,marginLeft:400,margin:100,width:700}}>
    //   <h3>Sign Up</h3>
    //   <div
    //     className={`alert alert-${alert.atype}`}
    //     role="alert"
    //     style={alert.aalert}
    //   >
    //     {alert.amessage}
    //   </div>

    //   <div className="mb-3">
    //     <label>First name</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="First name"
    //       onChange={(e) => {
    //         setForm({
    //           ...form,
    //           firstName: e.target.value,
    //         });
    //       }}
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label>Last name</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Last name"
    //       onChange={(e) => {
    //         setForm({
    //           ...form,
    //           lastName: e.target.value,
    //         });
    //       }}
    //     />
    //   </div>

    //   <div className="mb-3">
    //     <label>Email address</label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       placeholder="Enter email"
    //       onChange={(e) => {
    //         setForm({
    //           ...form,
    //           email: e.target.value,
    //         });
    //       }}
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       className="form-control"
    //       placeholder="Enter password"
    //       onChange={(e) => {
    //         setForm({
    //           ...form,
    //           pass: e.target.value,
    //         });
    //       }}
    //     />
    //   </div>
    //   <div className="d-grid">
    //     <button
    //       type="submit"
    //       className="btn btn-outline-primary"
    //       style={{marginTop:10}}
    //       onClick={(e) => submit(e)}
    //     >
    //       Sign Up
    //     </button>
    //   </div>
    //   <p className="forgot-password text-right">
    //     Already registered <a href="/login">sign in?</a>
    //   </p>
    // </form>
    // </div>
    <div className="container" style={{ marginBottom: '12px' ,fontFamily:"nexa"}}>
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="mb-5">
                        <h3 className="h4 font-weight-bold text-theme">REGISTER</h3>
                      </div>
                      <p className="text-muted mt-2 mb-5">
                        Welcome to B Airways! By creating an account with us, you'll be able to book flights, manage your reservations, and access special deals and discounts. Signing up is quick and easy, so start your journey with B Airways today! With your account, you can:
                      </p>
                      <form>
                        <div className="form-group">
                          <label className="form-label" htmlFor="fname">
                            First name
                          </label>
                          <input id="fname" className="form-control form-control" type="text" />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="lname">
                            Last Name
                          </label>
                          <input id="lname" className="form-control form-control" type="text" />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            id="exampleInputEmail1"
                            className="form-control form-control"
                            type="email"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            id="exampleInputPassword1"
                            className="form-control form-control"
                            type="password"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="exampleInputPassword2">
                            Submit Password
                          </label>
                          <input
                            id="exampleInputPassword2"
                            className="form-control form-control"
                            type="password"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="passportnumber">
                            Passport Number
                          </label>
                          <input
                            id="passportnumber"
                            className="form-control form-control"
                            type="text"
                          />
                        </div>
<div className="form-group">
                          <label className="form-label" htmlFor="birthday">
                            BirthDay
                          </label>
                          <input id="birthday" className="form-control form-control" type="date" />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="country">
                            Country
                          </label>
                          <input id="country" className="form-control form-control" type="text" />
                        </div>
                        <div className="form-group mb-5">
                          <label className="form-label" htmlFor="cnumber">
                            Phone Number
                          </label>
                          <input id="cnumber" className="form-control form-control" type="text" />
                        </div>
                        <button className="btn-theme" type="submit">
                            Register
                        </button>
                        <p className="text-center text-muted">
                            Already have an account?{' '}
                            <a className="text-primary ml-1" href="login.html">
                                login
                            </a>
                        </p>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-inline-block">
                    <div className="account-block rounded-right">
                      <div className="overlay rounded-right"></div>
                      <div className="account-testimonial">
                        <p className="lead text-white">
                          Book flights and manage your reservations online. Access special deals and discounts available only to account holders. Store your personal information and preferences for faster booking in the future. View your travel history and itineraries. Receive updates and promotions from B Airways
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
