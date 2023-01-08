import React from "react";
import { useState, useEffect } from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Bookings_by_Passenger_Type(){

    const[Bookings_by_Passenger_Type,setBookings_by_Passenger_Type] = useState([]);
    const [total,setTotal] = useState(0);
    const[platinum_amount,setPlatinum_amount] = useState(0);
    const[bussiness_amount,setBis_amount] = useState(0);
    const[economy_amount,setEco_amount] = useState(0);

    console.log(platinum_amount,bussiness_amount,economy_amount,total);
    

    useEffect(() => {
        fetch("/api/Bookings_by_Passenger_type")
        .then((res) => res.json())
        .then((data) => {
            if(data.status){
                console.log(data.data);
                setBookings_by_Passenger_Type(data.data);
                setPlatinum_amount(parseInt(data.data[0].bookings));
                setBis_amount(parseInt(data.data[1].bookings));
                setEco_amount(parseInt(data.data[2].bookings));
                setTotal(parseInt(data.data[0].bookings)+parseInt(data.data[1].bookings)+parseInt(data.data[2].bookings));
                
            }
        })
    },[])

    const generatePDF = (e) => {
        e.preventDefault();
        const doc = new jsPDF();
        doc.autoTable({html:"#table"});
        doc.save("Bookings_by_Passenger_Type.pdf");
    }

    const style_card = {
        marginTop : 30,
        width : 935,
        marginLeft : 300,
        marginRight : 300,
        height : 650,
        paddingTop : 20
        
    
    };
    return(
        <div className="shadow-lg p-3 mb-5 bg-white rounded" style={style_card} id="div1">
            <h1>Bookings By Each Passenger Type</h1>
            <div className="table-responsive">
                <table className="table table-striped table-hover align-middle" id = "table">
                    <thead>
                        <tr>
                            <th scope="col">Passenger Type</th>
                            <th scope="col">No.of Bookings</th>
                            
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {Bookings_by_Passenger_Type.map((val) => {
                            return(
                                <tr key={val.ID}>
                            
                                    <th>{val.seat_type}</th>
                                    <td>{val.bookings}</td>
                                    
                                </tr>
                            )
                        })}
                 
                    </tbody>
                </table>
                <label>Platinum: {(Math.round((platinum_amount/total)*100).toString()+"%")}</label>
                <div class="progress">
  <                 div className="progress-bar bg-success" role="progressbar" style={{"width": (((platinum_amount/total)*100).toString()+"%")}} aria-valuenow={(platinum_amount/total).toString()} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br></br>
                <label>Bussiness: {(Math.round((bussiness_amount/total)*100).toString()+"%")}</label>
                <div class="progress"> 
  <                 div className="progress-bar bg-info" role="progressbar" style={{"width": (((bussiness_amount/total)*100).toString()+"%")}} aria-valuenow={(bussiness_amount/total).toString()} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br></br>
                <label>Economy: {(Math.round((economy_amount/total)*100).toString()+"%")}</label>
                <div class="progress">
  <                 div className="progress-bar bg-warning" role="progressbar" style={{"width": (((economy_amount/total)*100).toString()+"%")}} aria-valuenow={(economy_amount/total).toString()} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <br></br>
                <button className="btn btn-outline-secondary" onClick={(e)=>{generatePDF(e)}}>Download the report</button>
            </div> 

        </div>
    )
}

export default Bookings_by_Passenger_Type;