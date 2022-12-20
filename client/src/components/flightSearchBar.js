import React from "react";
import {useState,useEffect} from "react";


const SearchBar = () => {


    return(

        <div>

            <div className="shadow-lg p-3 mb-5 bg-white rounded" style={style_search_bar}>
            <input type="text" placeholder="From--"></input>
            <input type = "text" placeholder="To--" style={{marginLeft : 20}}></input>

            <br></br>
            <br></br>

            <input type="text" placeholder = "departure date"></input>
            <button className="btn btn-outline-secondary mx-4" style={{width : 200}}>Search</button>
            </div>
        </div>
    )
}