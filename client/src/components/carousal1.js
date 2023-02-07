import React, { Component } from "react";

import "./assets/css/invoice.css";
import "./assets/css/air-ticket.css";

import img1 from "./assets/img/kindpng_771409.png";
import img2 from "./assets/img/Logo W.png";
import logo from "./assets/img/Logo.png";
import img3 from "../components/assets/img/Logo-ticket.png";


const Carousal1 = () => {

  return (
    <div id="divToExport">
    <div class="invoice-company text-inverse f-w-600" style = {{"height":"117px",}}><img width="100" height="80" style = {{"height":"75px","width":"inherit",}} src={logo} /><span style = {{"color":"#0b5c5c","font-size":"60px","margin-left":"18px","font-family":"Nexa","font-weight":"800",}}>B Airways PVT LTD</span></div>
    <div>
      <div id ="divtoexp" class="div-ticket">
    <div class="card mb-4 mb-md-0">
        <div class="card-body">
            <div id="header" class="row tkt-heading">
                <div class="col-lg-4" style = {{"width":"66.666667%","border-right":"5.4px dotted rgb(255,255,255)",}}>
                    <h3 class="tkt-h3">AIRLINE TICKET</h3>
                </div>
                <div class="col" style = {{"width":"33.3333%",}}><span class="pull-right hidden-print"><img width="100" height="80" style = {{"height":"50px","width":"inherit",}} src={img2} /></span></div>
            </div>
            <div class="row tkt-body">
                <div class="col-sm-1">
                    <div class="card" style = {{"background":"#b3c8c9f5","border":"none",}}>
                        <div class="card-body" style = {{"background":"#b3c8c9f5",}}></div>
                    </div><img style = {{"width":"100%","height":"81%",}} src={img1} />
                </div>
                <div class="col-sm-7" style = {{"border-right":"5.4px dotted #053d41",}}>
                    <div class="card" style = {{"background":"#b3c8c900","border":"none",}}>
                        <div class="card-body" style = {{"background":"#b3c8c900",}}>
                            <div class="row tkt-det-row">
                                <div class="col-sm-4">
                                    <p class="text-q mb-0">Passanger&#39;s Name</p>
                                </div>
                                <div class="col-sm-8">
                                    <p class="text-filled mb-0">Johnatan Smith</p>
                                </div>
                            </div>
                            <div class="row tkt-det-row">
                                <div class="col-sm-3">
                                    <p class="text-q mb-0">Seat No</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-filled mb-0">S123</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-q mb-0">Class</p>
                                </div>
                                <div class="col-sm-3">
                                    <p class="text-filled mb-0">Business</p>
                                </div>
                            </div>
                            <div class="row tkt-det-row">
                                <div class="col-sm-2">
                                    <p class="text-q mb-0">From</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-filled mb-0">Colombo | CMB</p>
                                </div>
                                <div class="col-sm-2">
                                    <p class="text-q mb-0">To</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-filled mb-0">New York | NYK</p>
                                </div>
                            </div>
                            <div class="row tkt-det-row">
                                <div class="col-sm-2">
                                    <p class="text-q mb-0">Flight No</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-filled mb-0">F1289</p>
                                </div>
                                <div class="col-sm-2">
                                    <p class="text-q mb-0">Date</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-filled mb-0">26 Dec 2023</p>
                                </div>
                            </div>
                            <div class="row tkt-det-row">
                                <div class="text-q col-sm-2">
                                    <p class="mb-0">Departue</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-filled mb-0">23:00</p>
                                </div>
                                <div class="col-sm-2">
                                    <p class="text-q mb-0">Gate Time</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-filled mb-0">21:30</p>
                                </div>
                            </div>
                            <div class="row tkt-det-row">
                                <div class="col-sm-2">
                                    <p class="text-q mb-0">Ticket ID</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-filled mb-0">T12230025</p>
                                </div>
                                <div class="col-sm-2">
                                    <p class="text-q mb-0">Gate</p>
                                </div>
                                <div class="col-sm-4">
                                    <p class="text-filled mb-0">A</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4" style = {{"background":"url('"+{img3}+"') no-repeat 10% 10%",}}>
                    <div class="card" style = {{"background":"#b3c8c917","border":"none",}}>
                        <div class="card-body" style = {{"background":"#b3c8c933",}}>
                            <div class="row tkt-det-row">
                                <div class="col col-tear">
                                    <p class="mb-0 text-q">Johnatan Smith</p>
                                </div>
                            </div>
                            <div class="row tkt-det-row">
                                <div class="col-sm-6 col-tear">
                                    <p class="mb-0 text-q">S123</p>
                                </div>
                                <div class="col-sm-6 col-tear">
                                    <p class="mb-0 text-q">Business</p>
                                </div>
                            </div>
                            <div class="row tkt-det-row">
                                <div class="col-sm-6 col-tear">
                                    <p class="mb-0 text-q">CMB | NYK</p>
                                </div>
                            </div>
                            <div class="row tkt-det-row">
                                <div class="col col-tear">
                                    <p class="mb-0 text-q">F1289</p>
                                </div>
                            </div>
                            <div class="row tkt-det-row">
                                <div class="col col-tear">
                                    <p class="mb-0 text-q">26 Dec 2023 | 23:00</p>
                                </div>
                            </div>
                            <div class="row tkt-det-row">
                                <div class="col col-tear">
                                    <p class="mb-0 text-q">T12230025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer" class="row tkt-footer">
                <div class="col-lg-4" style = {{"width":"70%",}}><span class="pull-right hidden-print"></span></div>
            </div>
        </div>
    </div>
</div>

</div>
    <div class="invoice-note"><span> * Make all cheques payable to B Airways</span><br /><span> * Payment is due within 30 days</span><br /><span> * If you have any questions concerning this invoice, contact Amila, +94 15522397, ponnaamila@bairways.com] </span></div>
    <div class="invoice-footer">
        <p class="text-center m-b-5 f-w-600"> THANK YOU</p>
        <p class="text-center"><span class="m-r-10"><i class="fa fa-globe fa-fw fa-lg"></i>Â bairways.com</span><span class="m-r-10"><i class="fa fa-fw fa-lg fa-phone-volume"></i> T:016-18192302</span><span class="m-r-10"><i class="fa fa-envelope fa-fw fa-lg"></i> bairways@bways.com</span></p>
    </div>
</div>
  );
};

export default Carousal1;
