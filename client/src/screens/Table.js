import React from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/flightSearchBar";
import DisplayTable from "../components/flightTable";

function Table() {
  const location = useLocation();
  return (
    <div>
      <SearchBar selectedValues={location.state? location.state.form:{}} />
      <DisplayTable
        tableData={location.state? location.state.Tabledata:{}} 
        selectedValues={location.state? location.state.form:{}} 
      />
    </div>
  );
}

export default Table;
