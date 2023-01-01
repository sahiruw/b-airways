import React from "react";
import SearchBar from "../components/flightSearchBar";
import DisplayTable from "../components/flightTable";
function HomeScreen() {
  return (
    <div>
      <div className="container-fluid" id="section1">
        <div className="row">
          <SearchBar />
          {/* <DisplayTable /> */}
        </div>
      </div>
    </div>
  );
}


export default HomeScreen;
