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

      <Offcanvas show={show} onHide={handleClose}>
      
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>B-Airways</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          You can proceed follwing actions as an Admin
          

          <hr></hr>

        
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="/login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/schedule">Flight Schedule</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>

       

        </Offcanvas.Body>
      </Offcanvas>
    </>

    );
}

export default OffCanvasMenue;