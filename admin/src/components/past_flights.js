import React from "react";
import { useState, useEffect,useRef } from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';


function Past_Flights(){

    const tableRef = useRef(null);
    const[Destinations,setDestinations] = useState([]);
    const[form,setForm] = useState({
        start_des : '',
        end_des : ''
    });

    const[pastFlightDetails,setPastFlightDetails] = useState([]);

    useEffect(() => {
        fetch('api/departure')
        .then(res => res.json())
        .then((data) => {
            setDestinations(data.data);
        })
    },[]);


    const past_flight_details = (e) => {
        e.preventDefault();
        let start_destination = form.start_des;
        let end_destination = form.end_des;


        fetch(`/api/Past_Flights?start_destination=${start_destination}&end_destination=${end_destination}`)
        .then(res => res.json())
        .then((data) => {
            setPastFlightDetails(data.data);
        })

        
    }

    const generatePDF = (e) => {
        e.preventDefault();
        const doc = new jsPDF();
        doc.autoTable({html: '#my-table'});
        doc.save('table.pdf');
    }

    const style_card = {
        marginTop : 30,
        "width" : "auto",
        marginLeft : 300,
        marginRight : 300,
        "height" : "auto",
        paddingTop : 20,
        
    };

    return(
        <div className="shadow-lg p-3 mb-5 bg-white rounded" style={style_card}>
            <h1 style={{marginLeft : 270}}>Past Flight Details</h1>
            <div className="shadow-lg p-3 mb-5 bg-white rounded row" style={{margin : 30,"width" : "auto","height" : "auto", paddingTop : 20}}>
            
            <div className = "col-2" style = {{paddingLeft:10}}>
            From :
            <select onChange = {(e) => {
                setForm({
                    ...form,
                    start_des : e.target.value
                })
            }}>
                {Destinations.map((val) => {
                    return (
                    <option value={val.code}>{val.code}</option>
                    );
                })}
            </select>
            </div>
            
            <div  className = "col-2" style = {{paddingLeft:10}}>   
            To :  
            <select onChange = {(e) => {
                setForm({
                    ...form,
                    end_des : e.target.value
                })
            }}>
                {Destinations.map((val) => {
                    return (
                    <option value={val.code}>{val.code}</option>
                    );
                })}
            </select>
            </div>
            <button  className = "btn col-3 btn-outline-secondary" style = {{marginLeft:20}} onClick = {(e) => {past_flight_details(e)}}>Get past flight details</button>
            <button  className = "btn col-3 btn-outline-secondary" style = {{marginLeft:20}} onClick = {(e) => {generatePDF(e)}}><DownloadForOfflineIcon/>Generate PDF</button>
            </div>
            <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{style_card}}>
            <div className="table-responsive">
                <table className="table table-striped table-hover align-middle" id = "my-table">
                    <thead>
                        <tr>
                            <th scope="col">Aircraft Name</th>
                            <th scope="col">Flight ID</th>
                            <th scope="col">Flight Status</th>
                            <th scope="col">Passenger Count</th>
                            
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {pastFlightDetails.map((val) => {
                            return(
                                <tr key={val.ID}>
                            
                                    <th>{val.aircraft_name}</th>
                                    <td>{val.flight_ID}</td>
                                    <td>{val.flight_status}</td>
                                    <td>{val.passenger_count}</td>
                                    
                                </tr>
                            )
                        })}
                 
                    </tbody>
                </table>
                
            </div> 
            </div>
        </div>
    )
}

export default Past_Flights;