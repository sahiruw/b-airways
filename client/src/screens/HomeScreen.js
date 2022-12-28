import React from "react";
import Search from "../components/flightSearchBar";
import DisplayTable from "../components/flightTable";
function HomeScreen() {
  return (
    <div>
      <div className="container-fluid" id="section1">
        <div className="row">
          <Search />
          <DisplayTable />
        </div>
      </div>
    </div>
  );
}


export default HomeScreen;
