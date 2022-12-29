import React, { useEffect, useState } from "react";

function SeatSelection(props) {
  const [aircraftDetails, setairecraftDetails] = useState(null);

  useEffect(() => {
  fetch("/api/getAircraftDetailsByID?aircraftID=" + props.aircraftID)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setairecraftDetails(data.data);
        } else {
          setairecraftDetails(null);
        }
      });
  }, []);

  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Fuck me
      </button>
      <h1>{props.aircraftID}</h1>
    </div>
  );
}

export default SeatSelection;
