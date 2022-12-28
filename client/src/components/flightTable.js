import React from "react";
import { useState,useEffect } from "react";


const DisplayTable = () => {


    const [flightList , setFlightList] = useState([]);

    return(
        <div className="table-responsive">
                <table className="table table-striped table-hover align-middle">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Depature</th>
                            <th scope="col">Arrival</th>
                            <th scope="col">Book</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {flightList.map((val,index) => {
                            return(
                                <tr key={val.ID}>
                            
                                    <th>{val.ID}</th>
                                    <td>{val.fromtime}</td>
                                    <td>{val.totime}</td>
                                    <td>{val.dep_time}</td>
                                    <td>{val.arrival_time}</td>
                                    <td><button className='btn btn-outline-secondary'>Book</button></td>
                                </tr>
                            )
                        })}
                 
                    </tbody>
                </table>
            </div>

    )
}

export default DisplayTable;