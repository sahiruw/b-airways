import React from "react";
import {useState,useEffect} from "react";


const SearchBar = () => {


    const[Airports,setAirports] = useState([]);
    const[FlightList,setFlightList] = useState([]);
    const[from,setFrom] = useState("");
    const[to,setTo] = useState("");
    const[departureDate,setDepartureDate] = useState("");
    const[seat_type,setSeat_type] = useState("");
    const[passengers,setPassengers] = useState(0);


    useEffect(() => {
        fetch("/api/departure")
        .then((res) => res.json())
        .then((data) => {
            if(data.status){
                setAirports(data.data);
            }
        })

    })

    useEffect(() => {
        
    })

    const ShowBySearch = (e) => {
        e.preventDefault();

        let from_des = from;
        let to_des = to;
        let departure_Date = departureDate;
        let Seat_type = seat_type;
        let Passengers = passengers;

    
        
        fetch(`/api/Flights?from=${from_des}&to=${to_des}&departureDate=${departure_Date}&seat_type=${Seat_type}&passengers=${Passengers}`)
        .then((res) => res.json())
        .then((data) => {
            // if(data.status){
            //     setFlightList(data.data);
            //     console.log(data.data);
            // }
            setFlightList(data.data);
            console.log(data.data);
        })
    }







    const style_search_bar = {
        
        width : 500,
        marginLeft : 50,
        marginTop : 10

    };

    const style_class_search = {
        width : 190,
        padding : 5
    }


    return(

        <div>

            <div className="shadow-lg p-3 mb-5 bg-white rounded" style={style_search_bar}>
            <select onChange={(e) => {
                setFrom(e.target.value);
            }}>
                <option selected>To--</option>
                {Airports.map((val) => {
                    return(
                        
                        <option value={val.code}>{val.code}</option>
                    )
                })}
            </select>

            <select onChange={(e) => {
                setTo(e.target.value);
            }}>
                <option selected>From--</option>
                {Airports.map((val) => {
                    return(
                        <option value={val.code}>{val.code}</option>
                    )
                })}
            </select>
            
            <br></br>
            <br></br>

            <select className = "from-select" aria-label = "Defaul select example" style={style_class_search} onChange = {(e) => {
                setSeat_type(e.target.value);
            }}>
                <option selected>Class</option>
                <option value={"Bussiness"}>Business</option>
                <option value={"Economy"}>Economy</option>
                <option value={"Platinum"}>Platinum</option>
            </select>
            <input type = "text" placeholder="Passengers" onChange={(e) => {
                setPassengers(e.target.value);
            }}></input>
            <br></br>
            <input type = "date" onChange={(e) => {
                setDepartureDate(e.target.value);
            }}></input>
            <button className="btn btn-outline-secondary mx-4" style={{width : 200}} onClick = {(e) => ShowBySearch(e)}>Search</button>
            </div>
        </div>


    )
}
export default SearchBar;