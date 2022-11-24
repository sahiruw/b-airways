import React from "react";
import carImage from "../images/4.jpg"

function HomeScreen() {
  return (
    <div>
      <div className="container-fluid" id="section1">
        <div className="row">
        <img src={carImage} alt="Image" className="rounded mx-auto d-block" />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
