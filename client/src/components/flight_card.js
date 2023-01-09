import React from "react";
import newyork from './assets/img/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg'
import './assets/css/Sakae-Simple-Section.css'

const FlightCard = (props) => {
    return (
        // <div className="card col-4 rounded shadow-lg p-3 mb-5 bg-white rounded " style={{width : 400, margin : 10}}>
        // <div className="card-body">
        // <h5 className="card-title" ><a href="#" class="text-decoration-none">{props.from} -- {props.to}</a></h5>
        //     <h6 className="card-subtitle mb-2 text-muted">{props.aircraft}</h6>
        //     <p className="card-text">departure time : {props.dept}</p>
        //     <p className="card-text">arrival time : {props.arr}</p>
        //     <a href="#" className="card-link">
        //     <button  className='btn btn-outline-secondary'>Book</button>
        //     </a>
            
        // </div>
        // </div>
        <div class="col-md-4" style={{backgroundColor:"white"}}>
            <div class="imgRedonda"><img class="imgpeque" src={newyork} /></div>
                <h1 class="text-center" style = {{"font-weight":"bold","font-size":"46px",}}>{props.from} -- {props.to}</h1>
                <p class="text-center" style = {{"font-weight":"bold","font-size":"23px",}}>{props.aircraft}</p>
                <p style = {{"font-family":"nexa","font-size":"15px",}}>DepatureTime<br />{props.dept}</p>
                <p style = {{"font-family":"nexa",}}>Arrival Time<br />{props.arr}</p>
            <div class="row">
                <div class="col text-end"><a class="btn btn-light" role="button" href="destinations.html" style = {{"margin":"17px","background":"#08575c","color":"rgb(255,255,255)","transform":"scale(1.50)","margin-top":"-7px",}}>More..</a></div>
            </div>
        </div>
    );
} 

export default FlightCard;