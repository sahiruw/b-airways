import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasMenue(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    


    return(
        <>
      {/* <Button variant="primary" onClick={handleShow}>
      &#9776;
      </Button> "font-size:30px;cursor:pointer"*/}
      <span style={{fontSize : 30 , cursor : "pointer"}} onClick={handleShow}>&#9776;</span>

      <Offcanvas show={show} onHide={handleClose} style= {{"background-color" : "#047a74"}}>
      
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color : "white"}}><h2>B-Airways</h2></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{color : "white"}}>
          You can proceed follwing actions as an Admin
          

          <hr style={{color : "white"}}></hr>

        
        <ul class="nav flex-column">
            <li class="nav-item ">
                <a class="nav-link active" href="/login" style={{color : "white"}}>Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/schedule" style={{color : "white"}}>Flight Schedule</a>
            </li>
         </ul>
         <hr></hr>
         <ul class="nav flex-column">   
            <li class="nav-item">
                <a class="nav-link" href="/action1" style={{color : "white"}}>Number of passengers to a given destination</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/bookings_by_passenger_type" style={{color : "white"}}>Bookings by passenger type</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="/past_flights" style={{color : "white"}}>Past flight degtails</a>
            </li>
        </ul>

       

        </Offcanvas.Body>
      </Offcanvas>
    </>

    );
}

export default OffCanvasMenue;