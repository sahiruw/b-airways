import React from "react";
import under_image from "../components/assets/img/under_image.png";
import "../components/assets/css/loading-div.css";

function UnderConstruction() {
  return (
    <div style={{height:"700px", width:"100%"}}>
      <img class="loadingdivimg" src={under_image}style = {{"transform":"scale(0.40)" }} />
      </div>
    

  );
}

export default UnderConstruction;
