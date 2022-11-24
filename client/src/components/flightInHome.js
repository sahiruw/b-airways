import React from "react";

function flightInHome() {
  return (
    <div className="col">
      <div className="card" style="width: 18rem; height: 25rem;">
        <img
          className="card-img-top"
          src="images/mumbai.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title" style="padding-left:70px;">
            BIA - BOM
          </h5>
          <p className="card-text">
            Book the flight before the due date. Get the experience of novel air
            craft facilities
          </p>
          <input
            type="button"
            style="margin-left: 20px; width: 200px;"
            className="btn btn-outline-info"
            name=""
            value="Book"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
