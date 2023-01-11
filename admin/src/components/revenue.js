import React from "react";
import { useState, useEffect } from "react";

function Revenue() {
  const [revenue, setRevenue] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("/api/Revenue")
      .then((res) => res.json())
      .then((data) => {
        setTotal(data.total);
        setRevenue(data.revenue);
      });
  });

  const style_card = {
    marginTop: 30,
    width: 935,
    marginLeft: 300,
    marginRight: 300,
    height: "auto",
    paddingTop: 20,
  };
  const style_card_total = {
    
    width: "500px",
    height: "auto",
    "justify-content" : "center",
    display : "flex",
    backgroundColor : "#f0f0f0",
    marginLeft : "200px",
    
  };

  return (
    <div>
        <div class="shadow-none p-3 mb-5 bg-light rounded" style={{"justify-content" : "center",
    display : "flex",}}>
            <h1>Current Revenue OF B Air Ways</h1>
            
        </div>
      <div
        className="shadow-lg p-3 mb-5 bg-white rounded"
        style={style_card}
        id="div1"
      >
        <div className="table-responsive">
          <table
            className="table table-striped table-hover align-middle"
            id="table"
          >
            <thead>
              <tr>
                <th scope="col">Aircraft Type</th>
                <th scope="col">Revenue</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {revenue.map((val) => {
                return (
                  <tr key={val.ID}>
                    <th>{val.name}</th>
                    <td>{val.revenue}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        {revenue.map((val) => {
          return (
            <div>
            <h4 style={{"font-weight": "bold"}}>{val.name}<h6>${val.revenue}</h6></h4>
            <div class="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{
                  width: ((val.revenue / total) * 100).toString() + "%",
                }}
                aria-valuenow={(val.revenue / total).toString()}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br></br>
            </div>
          );
        })}
        <br></br>
        <hr></hr>
        <br></br>
        <div className="shadow-none p-3 mb-5 rounded"
        style={style_card_total}
        id="div1">
            <h4>Total Revenue: ${total}</h4>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
