import React from 'react';
import { useEffect,useState } from 'react';
import {Link,useNavigate} from "react-router-dom";


function Login(){

    const[form,setForm] = useState({
        email : "",
        pass : "",
    });
    const[messageObject,setmessageObject] = useState({
       message : "",
       alertType : "",
       alertStyle : {display : "none"},
    });

    const navigate = useNavigate();

    const loginProcess = (message,alertType,alertStyle) => {
        setmessageObject({
          ...messageObject,
          message : message,
          alertType : alertType,
          alertStyle : {display : "block"}
        });

        if(alertType === "success"){
          //document.location.replace("/start");
          navigate('/start',{
            state : {useMail : form.email},
          });
        }

    }

    const submit = (e) => {
        e.preventDefault();

        let password = form.pass;
        let email = form.email;
        
        fetch(`/api/adminLogin?password=${password}&email=${email}`)
        .then((res) => res.json())
        .then((data)=>{

          if(data.status){
            // setmessageObject({...messageObject,message : data.message,alertType : "success",alertStyle : {display : "block"}});
            loginProcess(data.message,"success",{display : "block"});
          } 
          else if(!data.status){
            // setmessageObject({...messageObject,message : data.message,alertType : "danger",alertStyle : {display : "block"}});
            loginProcess(data.message,"danger",{display : "block"});
          }

        })

    }

    return(

        <>
      <section className="position-relative py-4 py-xl-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>Log in</h2>
              <p className="w-lg-50">
                Fill out the email and password fields to proceed the login process
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div className="card mb-5">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-person"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                    </svg>
                  </div>

                  <div className={"alert alert-" + messageObject.alertType} role="alert" style={messageObject.alertStyle}>
                    {messageObject.message}
                  </div>


                  <form className="text-center" method="post">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => {
                          setForm({
                            ...form,
                            email: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => {
                          setForm({
                            ...form,
                            pass: e.target.value,
                          });
                        }}
                      />
                    </div>

    
                    <div className="mb-3">
                      <button
                        className="btn btn-primary d-block w-100"
                        type="submit"
                        onClick={(e) => submit(e)}
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-muted">Forgot your password?</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

    );
}

export default Login;