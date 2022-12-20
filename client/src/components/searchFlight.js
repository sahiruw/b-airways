import React from "react";
import { useState,useEffect } from "react";


const Show = () => {

    const [flightList , setFlightList] = useState([]);

    useEffect(() => {
        fetch("/api/showFlight")
        .then((res) => res.json())
            .then((data) => {
                setFlightList(data.data)    
            })
    })


    const style_search_bar = {
        
        width : 500,
        marginLeft : 50,
        marginTop : 10

    };


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

            

            <br></br>
            <br></br>

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
        </div>

    )
}

export default Show;