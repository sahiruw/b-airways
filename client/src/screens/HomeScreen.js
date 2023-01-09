import React, { useEffect } from "react";
import SearchBar from "../components/flightSearchBar";
import DisplayTable from "../components/flightTable";
import FlightCard from "../components/flight_card";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Blog from "../components/blogs";

function HomeScreen() {
  const [recentFlights, setRecentFlights] = useState([]);
  let flightList = [
    ["SHA", "CAN", "2022-01-01", "2022-01-02"],
    ["COM", "CAN", "2022-01-01", "2022-01-02"],
    ["SHA", "IND", "2022-01-01", "2022-01-02"],
  ];

  useEffect(() => {
    fetch("/api/RecentFlights")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setRecentFlights(data.data);
        }
      });
  }, []);

  console.log(recentFlights);

  return (
    <div>
      <div id="section1">
        <SearchBar />
        <div className="row" style={{ marginleft: 40}}>
          <div style={{marginTop : 10}}>
            <div class="container">
            {/* sombra borderedondo */}
              <div className="row" style={{paddingLeft : 40,marginLeft : 50}}>
                {recentFlights.map((flights) => (
                  <FlightCard
                    from={flights.start_destination}
                    to={flights.end_destination}
                    dept={flights.departure_time}
                    arr={flights.arrival_time}
                    aircraft={flights.aircraft_name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Blog />
      </div>
    </div>
  );
}

export default HomeScreen;
