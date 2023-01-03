import React from "react";

const FlightCard = (props) => {
    return (
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.from} -- {props.to}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.aircraft}</h6>
            <p className="card-text">departure time : {props.dept}</p>
            <p className="card-text">arrival time : {props.arr}</p>
            <a href="#" className="card-link">
            <button  className='btn btn-outline-secondary'>Book</button>
            </a>
            
        </div>
        </div>
    );
} 

export default FlightCard;