import React from "react";
import {useState,useEffect} from "react";

function Action1(){

    const[Destinations,setDestinations] = useState([]);
    const[count,setCount] = useState(0);

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
            setCount(data.data);
            alert(data.data[0].number_of_passengers);
        })
    }
   

    return(
        <div>
            <h1>Admin Action 1</h1>
            <label>From : </label><input type = "date" onChange = {(e) => {
                setForm({
                    ...form,
                    from_time : e.target.value
                });
            }}></input>
            <label>To : </label><input type="date" onChange = {(e) => {
                setForm({
                    ...form,
                    to_time : e.target.value
                })
            }}/>
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
            <button className="btn-primart" onClick={(e) => action1(e)}>Get</button>
        </div>
    );
}

export default Action1;