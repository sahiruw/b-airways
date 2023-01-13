import React, { Component } from "react";
import { useState } from "react";

import "./assets/css/scrolltable.css";
import "./assets/css/Sakae-Simple-Section.css";


import img1 from "./assets/img/AirBus1.jpg";
import img2 from "./assets/img/male-silluette.jpg";


const Carousal = () => {

  return (
    <div>
      <section style = {{"background-color":"#eee",padding:"10px",}}>
            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body text-center"><img class="rounded-circle img-fluid" src={img2} alt="avatar" style = {{"width":"150px",}} />
                            <h5 class="my-3">John Smith</h5>
                            <p class="text-muted mb-1">johnsmith@gmail.com</p>
                            <p class="text-muted mb-4">Sri Lanka</p>
                        </div>
                    </div>
                    <div class="card mb-2 mb-lg-0">
                        <div class="card-body p-0">
                            <div class="bg-white d-flex flex-column p-2">
                                <h5 style = {{"text-align":"center","font-size":"20px","font-weight":"bold","height":"20","margin-bottom":"0px",}}>Last Flight</h5>
                                <div class="text-center mt-4"><img class="img-fluid" src={img1} width="200" style = {{"margin-bottom":"16px",}} /></div>
                                <h5 style = {{"text-align":"center","font-size":"20px","font-weight":"bold","height":"20","margin-bottom":"0px",}}>Colombo - New York</h5>
                                <p style = {{"text-align":"center","margin-bottom":"13px",}}>Wednesday 11 January 2023</p><b style = {{"text-align":"center",}}><i class="fa-solid fa-plane-departure" style = {{"padding-right":"14px",}}></i><span style = {{"color":"rgb(63, 63, 63)","text-align":"center",}}>23:00 Colombo</span><br /></b><span style = {{"color":"rgb(63, 63, 63)","text-align":"center",}}>Bandaranaike International(CMB)</span><b style = {{"text-align":"center",}}><i class="fa fa-plane-arrival" style = {{"margin-right":"14px",}}></i><span style = {{"color":"rgb(63, 63, 63)",}}>04:00 (+1Day) Abu Dhabi</span><br /></b>
                                <p style = {{"text-align":"center",}}>Abu Dhabi Airport (AUH)</p><b style = {{"text-align":"center",}}><span style = {{"color":"rgb(63, 63, 63)",}}>Air Craft</span><br /></b>
                                <p style = {{"text-align":"center",}}>AirBus 3012</p><b style = {{"text-align":"center",}}><span style = {{"color":"rgb(63, 63, 63)",}}>Seat Number</span><br /></b>
                                <p style = {{"text-align":"center",}}>Business - B1245</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Full Name</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">Johnatan Smith</p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Email</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">example@example.com</p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Passport Number</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">(097) 234-5678</p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Mobile</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">(098) 765-4321</p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Address</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">BirthDay</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Country</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div>
                                        <div class="row">
                                            <div class="col-12">
                                                <h2 class="text-center">Data Summury</h2>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 col-sm-4 col-lg-2" style = {{"width":"33.33333%",}}>
                                                <p class="text-center"><span class="fa-stack"><i class="fa fa-plane fa-stack-2x"></i><br /><br /></span><br /><span class="h2">10</span><br /><span class="text-uppercase text-muted h6">Total flights</span></p>
                                            </div>
                                            <div class="col-6 col-sm-4 col-lg-2" style = {{"width":"33.33333%",}}>
                                                <p class="text-center"><span class="fa-stack"><i class="fa fa-book fa-stack-2x"></i><br /><br /></span><br /><span class="h2">21</span><br /><span class="text-uppercase text-muted h6">Total bookings</span></p>
                                            </div>
                                            <div class="col-6 col-sm-4 col-lg-2" style = {{"width":"33.33333%",}}>
                                                <p class="text-center"><span class="fa-stack"><i class="fa fa-dollar fa-stack-2x"></i><br /><br /></span><br /><span class="h2">$3,250 </span><br /><span class="text-uppercase text-muted h6">Total COst</span></p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 col-sm-4 col-lg-2" style = {{"width":"33.33333%",}}>
                                                <p class="text-center"><span class="fa-stack"><i class="fa fa-exclamation-circle fa-stack-2x"></i><br /><br /></span><br /><span class="h2">1 </span><br /><span class="text-uppercase text-muted h6">Cancelled flights</span></p>
                                            </div>
                                            <div class="col-6 col-sm-4 col-lg-2" style = {{"width":"33.33333%",}}>
                                                <p class="text-center"><span class="fa-stack"><i class="fa fa-thumbs-up fa-stack-2x"></i><br /><br /></span><br /><span class="h2">12 </span><br /><span class="text-uppercase text-muted h6">COnfirmation rate</span></p>
                                            </div>
                                            <div class="col-6 col-sm-4 col-lg-2" style = {{"width":"33.33333%",}}>
                                                <p class="text-center"><span class="fa-stack"><i class="fa fa-percent fa-stack-2x"></i><br /><br /></span><br /><span class="h2">1.52</span><br /><span class="text-uppercase text-muted h6">avg flghts per month</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style = {{"padding-top":"0px","margin-top":"18px",}}>
                <div class="col">
                    <div class="card mb-4 mb-md-0">
                        <div class="card-body">
                            <div class="col">
                                <h3 class="h3-1" style = {{"margin-top":"0px",}}>Flights Details<i class="fa fa-plane" style = {{"margin-left":"12px",}}></i></h3>
                                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                                    <table class="table table-striped table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" style = {{"width":"10%",}}>Flight ID</th>
                                                <th scope="col" style = {{"width":"10%",}}>AirCraft</th>
                                                <th scope="col" style = {{"width":"10%",}}>Seat No</th>
                                                <th scope="col" style = {{"width":"15%",}}>From</th>
                                                <th scope="col" style = {{"width":"15%",}}>To</th>
                                                <th scope="col" style = {{"width":"20%",}}>Departure Time</th>
                                                <th scope="col" style = {{"width":"20%",}}>Arrival Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style = {{"margin-top":"12px",}}>
                <div class="col">
                    <div class="card mb-4 mb-md-0">
                        <div class="card-body">
                            <div class="col">
                                <h3 class="h3-1" style = {{"margin-top":"0px",}}>Booking Details<i class="fa fa-book" style = {{"margin-left":"12px",}}></i></h3>
                                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                                    <table class="table table-striped table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" style = {{"width":"12%",}}>Booking ID</th>
                                                <th scope="col" style = {{"width":"25%",}}>Passanger Name</th>
                                                <th scope="col" style = {{"width":"12%",}}>Flight ID</th>
                                                <th scope="col" style = {{"width":"15%",}}>AirCraft ID</th>
                                                <th scope="col" style = {{"width":"15%",}}>From</th>
                                                <th scope="col" style = {{"width":"15%",}}>To</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</div>
  );
};

export default Carousal;
