import React from "react";
import { useEffect,useState } from "react";


function PassengerDetails(){

    const[passengerDetails,setPassengerDetails] = useState([]);
    const[member_details_above18,setMemberDetailsAbove18] = useState([]);
    const[guest_details_above18,setGuestDetailsAbove18] = useState([]);
    const[member_details_below18,setMemberDetailsBelow18] = useState([]);
    const[guest_details_below18,setGuestDetailsBelow18] = useState([]);
    const[date,setDate] = useState("");

    // useEffect(() => {
    //     let date_passed = date;
        
    //     fetch(`api/Passenger_Details?date=${date_passed}`)
    //     .then(res => res.json())
    //     .then((data) => {
    //         setMemberDetailsAbove18(data.above_18_members);
    //         setMemberDetailsBelow18(data.below_18_members);
    //         console.log(member_details_above18);
    //         console.log(member_details_below18);

    //     })
    // },[])

    const get_details = (e) => {
        let date_passed = date;
        
        fetch(`api/Passenger_Details?date=${date_passed}`)
        .then(res => res.json())
        .then((data) => {
            setMemberDetailsAbove18(data.above_18_members);
            setMemberDetailsBelow18(data.below_18_members);
            console.log(member_details_above18);
            console.log(member_details_below18);

        })
    }

    return(
        <div>
            <h1>Passenger Details in the next immediate flight</h1>
            <input type="date" onChange={(e) => {
                setDate(e.target.value);
            }}></input>
            <button onClick={(e) => get_details(e)}>GET</button>

        </div>
    )
}

export default PassengerDetails;