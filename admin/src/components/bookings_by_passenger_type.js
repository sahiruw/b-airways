import React from "react";
import { useState, useEffect } from "react";

function Bookings_by_Passenger_Type(){

    const[Bookings_by_Passenger_Type,setBookings_by_Passenger_Type] = useState([]);

    useEffect(() => {
        fetch("/api/Bookings_by_Passenger_type")
        .then((res) => res.json())
        .then((data) => {
            if(data.status){
                console.log(data.data);
                setBookings_by_Passenger_Type(data.data);
                console.log(Bookings_by_Passenger_Type);
            }
        })
    },[])
    return(
        <div>
            <h1>Bookings by Passenger Type</h1>
            {/* <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Passenger Type</th>
                            <th scope="col">No.of Bookings</th>
                            
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {Bookings_by_Passenger_Type.tableData.map((val) => {
                            return(
                                <tr key={val.ID}>
                            
                                    <th>{val.seat_type}</th>
                                    <td>{val.bookings}</td>
                                    
                                </tr>
                            )
                        })}
                 
                    </tbody>
                </table>
            </div> */}

        </div>
    )
}

export default Bookings_by_Passenger_Type;