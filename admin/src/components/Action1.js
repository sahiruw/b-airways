import React from "react";
import {useState,useEffect} from "react";

function Action1(){

    const[Destinations,setDestinations] = useState([]);
    const[count,setCount] = useState(0);
    let alert_type = count >= 0 ? {display : "block"} : {display : "none"};
    console.log(alert_type);


    const[form,setForm] = useState({
        end_des : "",
        from_time : "",
        to_time : "",
    });



    useEffect(() => {
        fetch('api/departure')
        .then(res => res.json())
        .then((data) => {
            setDestinations(data.data);
        })
    },[]);

    const action1 = (e) => {
        
        
        let from_time = form.from_time;
        let to_time = form.to_time;
        let end_des = form.end_des;

        

        fetch(`api/Action1?end_destination=${end_des}&time_range_from=${from_time}&time_range_to=${to_time}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data.data[0].number_of_passengers);
            setCount(data.data[0].number_of_passengers);
            
        })
    }

    const style_card = {
        marginTop : 30,
        "width" : "auto",
        marginLeft : 300,
        marginRight : 300,
        "height" : "auto",
        paddingTop : 20
        
    
    };
   

    return(
        <div className="shadow-lg p-3 mb-5 bg-white rounded mw-100" style={style_card}>
            <h2>Number of Passengers Travelling to a given Destination</h2>
            <br></br>
            <div className="row">
            <div className="col-3">
            <label>From : </label><input type = "date" onChange = {(e) => {
                setForm({
                    ...form,
                    from_time : e.target.value
                });
            }}></input>
            </div>
            <div className="col-3">
            <label>To : </label><input type="date" onChange = {(e) => {
                setForm({
                    ...form,
                    to_time : e.target.value
                })
            }}/>
            </div>

            <select className = "col-2" onChange = {(e) => {
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
            <button className="btn btn-outline-secondary col-2" style = {{marginLeft:10}} onClick={(e) => action1(e)}>Get</button>
            </div>
            
            <br></br>
            <div className={"alert alert-success "} role="alert" style={alert_type}>
                 <label>
                    Number of passengers travelled  - {count}
                </label>
            </div>
        </div>
    );
}

export default Action1;