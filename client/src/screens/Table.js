import React from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/flightSearchBar";
import DisplayTable from "../components/flightTable";

function Table() {
const location = useLocation();
console.log(location.state.Tabledata);
  return (
    <div>
      <SearchBar />
      <DisplayTable tableData = {location.state.Tabledata}/>
    </div>
  );
}

export default Table;