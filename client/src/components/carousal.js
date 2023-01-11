// import React, { Component } from "react";
// import { useState } from "react";

// import "./assets/css/carousal.css";


// import img1 from "./assets/img/Layer 111.jpg";
// import img2 from "./assets/img/Layer 111.jpg";
// import img3 from "./assets/img/Layer 111.jpg";



// const Carousal = () => {

//   return (
//     <div>
//         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//     <ol class="carousel-indicators">
//         <li class="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//     </ol>
//     <div class="carousel-inner">
//         <div class="carousel-item "><img class="d-block w-100" src={img1} alt="First slide" style = {{"height":"auto","width":"100%",}} />
//             <div class="d-none d-md-block carousel-caption">
//                 <h1>First caption</h1>
//                 <p></p>
//             </div>
//         </div>
//         <div class="carousel-item active"><img class="d-block w-100" src={img2} alt="Second slide" style = {{"height":"auto","width":"100%",}} />
//             <div class="d-none d-md-block carousel-caption">
//                 <h1>Second caption</h1>
//                 <p></p>
//             </div>
//         </div>
//         <div class="carousel-item"><img class="d-block w-100" src={img3} alt="Third slide" style = {{"height":"auto","width":"100%",}} />
//             <div class="d-none d-md-block carousel-caption">
//                 <h1>Third caption</h1>
//                 <p></p>
//             </div>
//         </div><a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>
//     </div>
//     <div></div>
//     <div></div>
//     <div></div>
// </div>

// <div class="main-text hidden-xs" style = {{"-webkit-text-size-adjust":"100%","-webkit-tap-highlight-color":"rgba(0,0,0,0)","font-family":"'Helvetica Neue',Helvetica,Arial,sans-serif","font-size":"14px","line-height":"1.42857143","box-sizing":"border-box","position":"absolute","top":"50px","width":"96.66666666666666%","color":"#FFF","margin-top":"630px",}}>
//     <div class="container-rempadresponsive"  style = {{"transform":"scale(1.1)",}}>
//           <ul
//             class="wizardpane nav-fill"
//             style={{
//               "margin-bottom": "0",
//               "list-style": "none",
//               position: "relative",
//               background: "linear-gradient(to left,#095f65,#064c50 70%)",
//               width: "100%",
//               "border-top-left-radius": "20px",
//               "border-top-right-radius": "20px",
//             }}
//           >
//             <li class="searchbutton-mid">
//               <a
//                 class="searchlink-mid"
//                 href="#"
//                 style={{
//                   "font-weight": "400",
//                   "font-family": "nexa",
//                   "list-style": "none",
//                   "text-align": "center",
//                   "box-sizing": "border-box",
//                   "background-color": "transparent",
//                   "text-decoration": "none",
//                   "-webkit-transition": ".5s all",
//                   display: "block",
//                   color: "white",
//                   "background-position": "24% center",
//                   padding: "12px 15px 13px 15px",
//                   border: "0",
//                   "border-radius": "0",
//                   "font-size": "var(--font-m)",
//                   "line-height": "1.5",
//                   "padding-left": "0px",
//                   "padding-right": "45px",
//                 }}
//               >
//                 Book
//                 <i
//                   class="fa fa-plane"
//                   style={{
//                     "margin-right": "-74px",
//                     "padding-right": "0px",
//                     "margin-left": "13px",
//                     "border-color": "#ffffff",
//                     color: "#ffffff",
//                     "padding-bottom": "0",
//                     "margin-bottom": "0",
//                     "padding-top": "0",
//                     "--bs-body-bg": "#ffffff",
//                   }}
//                 ></i>
//               </a>
//             </li>
//           </ul>
//           <div
//             class="tab-content"
//             style={{
//               "font-size": "100%",
//               "font-family": "nexa",
//               position: "relative",
//               width: "100%",
//               padding: "15px 18px",
//               background: "#fff",
//             }}
//           >
//             <div
//               class="tab-active-book"
//               style={{
//                 "font-weight": "400",
//                 "line-height": "1.5",
//                 "text-align": "left",
//                 "font-size": "100%",
//                 "font-family": "nexa",
//                 color: "var(--primary1)",
//                 "box-sizing": "border-box",
//                 display: "block",
//               }}
//             >
//               <div
//                 class="flights-search-from"
//                 style={{
//                   "font-weight": "400",
//                   "line-height": "1.5",
//                   "text-align": "left",
//                   "font-size": "100%",
//                   "font-family": "nexa",
//                   color: "#064c50",
//                   "box-sizing": "border-box",
//                   "flex-wrap": "wrap",
//                   "margin-right": "0",
//                   "margin-bottom": "0",
//                   "margin-left": "0",
//                   "margin-top": "1rem",
//                   display: "flex",
//                   position: "relative",
//                 }}
//               >
//                 <div class="col-12 col-md-3 d-flex bk-search-block">
//                   <div class="d-flex qr-datepicker">
//                     <div class="bk-search-block-1">
//                       <div class="bk-search-block-2">
//                         <span class="t-class-info">From</span>
//                         <select onChange={(e) => {
//                             setForm({ ...Form, from: e.target.value });
//                           }}
//                             value= {Form? Form.from : ""}>
//                           <optgroup label="Country">
//                           {Airports.map((val) => {
//                                   return <option value={val.code}>{val.code}</option>;
//                                })}
//                           </optgroup>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-12 col-md-3 d-flex bk-search-block">
//                   <div class="d-flex qr-datepicker">
//                     <div class="bk-search-block-1">
//                       <div class="bk-search-block-2">
//                         <span class="t-class-info">To</span>
//                         <select onChange={(e) => {
//                               setForm({ ...Form, to: e.target.value });
//                                   }}
//                              value= {Form? Form.to : ""}>
//                           <optgroup label="Country">
//                           {Airports.map((val) => {
//                              return <option value={val.code}>{val.code}</option>;
//                                  })}
                              
//                           </optgroup>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-12 col-md-3 d-flex bk-search-block">
//                   <div class="d-flex qr-datepicker">
//                     <div class="bk-search-block-1">
//                       <div class="bk-search-block-2">
//                         <input class="t-day-check-in" type="date" onChange={(e) => {
//                               setForm({ ...Form, date: e.target.value });
//                                 }}
//                                    defaultValue= {Form? Form.date : ""}/>
//                         <span class="t-class-info">Date</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-12 col-md-3 d-flex bk-search-block">
//                   <div class="d-flex qr-datepicker">
//                     <div class="bk-search-block-1">
//                       <div class="bk-search-block-2">
//                         <span class="t-class-info">Passengers</span>
//                         <input type="number" min="1" max="9" onChange={(e) => {
//                                       setForm({ ...Form, passengerCount: e.target.value });
//                                   }}
//                          value= {Form? Form.passengerCount : 1}/>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-12 col-md-3 d-flex bk-search-block">
//                   <div class="d-flex qr-datepicker">
//                     <div class="bk-search-block-1">
//                       <div class="bk-search-block-2">
//                         <span class="t-class-info">Class</span>
//                         <select onChange={(e) => {
//                               setForm({ ...Form, seat_type: e.target.value });
//                                     }}
//                              value= {Form? Form.seat_type : ""}>
//                           <optgroup label="Country">
//                             <option value={"Economy"}>Economy</option>
//                             <option value={"Bussiness"} selected>
//                               Business
//                             </option>
//                             <option value={"Platinum"}>Platinum</option>
//                           </optgroup>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <a
//             class="btn btn-light action-button btn-theme btn-index-search"
//             role="button"
//             onClick={(e) => ShowBySearch(e)}
//           >
//             Search
//           </a>
//         </div>
// </div>

// <div class="container" style = {{"height":"250px",}}>   </div>

//     </div>
//   );
// };

// export default Carousal;
