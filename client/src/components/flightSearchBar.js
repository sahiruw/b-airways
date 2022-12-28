import React from "react";
import {useState,useEffect} from "react";


const SearchBar = () => {


    const[FlightList,setFlightList] = useState([]);
    const[to,setTo] = useState("");

    useEffect(() => {
        fetch("/api/departure")
        .then((res) => res.json())
        .then((data) => {
            if(data.status){
                setFlightList(data.data);
            }
        })

    })



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
            <select>
                <option selected>To--</option>
                {FlightList.map((val) => {
                    return(
                        
                        <option value={val.code}>{val.code}</option>
                    )
                })}
            </select>
            <select>
                <option selected>From--</option>
                {FlightList.map((val) => {
                    return(
                        <option value={val.code}>{val.code}</option>
                    )
                })}
            </select>
            
            <br></br>
            <br></br>

            <select className = "from-select" aria-label = "Defaul select example" style={style_class_search}>
                <option selected>Class</option>
                <option value={"bussines"}>Business</option>
                <option value={"economy"}>Economy</option>
                <option value={"platinum"}>Platinum</option>
            </select>
            <input type = "text" placeholder="Passengers"></input>
            <br></br>
            <input type = "date"></input>
            <button className="btn btn-outline-secondary mx-4" style={{width : 200}}>Search</button>
            </div>
        </div>
    )
}
export default SearchBar;