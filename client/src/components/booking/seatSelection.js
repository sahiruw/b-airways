import React, { useEffect, useState } from "react";

const Seat = ({ id, reserved, onClick }) => {
  const [isChecked, setIsChecked] = useState(reserved);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onClick(id, !isChecked);
  };

  return (
    <td>
      <div className="seat">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleClick}
        />
        <label htmlFor={id}>{id}</label>
      </div>
    </td>
  );
};

const Seats = ({ seats, onSeatClick }) => {
  return (
    <table className="seats">
      {seats.map((row) => {
        return (
          <tr>
            {row.map((seat) => (
              <Seat
                id={seat.id}
                reserved={seat.reserved}
                onClick={onSeatClick}
              />
            ))}
          </tr>
        );
      })}
    </table>
  );
};

function SeatSelection(props) {
  const [aircraftDetails, setairecraftDetails] = useState();
  let seatClass = props.seatClass || "Economy";

  const [seats, setSeats] = useState([
    [
      { id: "A1", reserved: false },
      { id: "A2", reserved: false },
      { id: "A3", reserved: false },
    ],
    [
      { id: "B1", reserved: false },
      { id: "B2", reserved: false },
      { id: "B3", reserved: false },
    ],
  ]);

  const [bookedSeatIds, setBookedSeatIds] = useState([]);

  useEffect(() => {
    fetch("/api/getAircraftDetailsByID?aircraftID=" + props.aircraftID)
      .then((res) => res.json())
      .then((data) => {
        setairecraftDetails(data.data);
      });
  },[]);

  const handleSeatClick = (id, reserved) => {
    setSeats((prevSeats) =>
      prevSeats.map((row) =>
        row.map((seat) => (seat.id === id ? { ...seat, reserved } : seat))
      )
    );
  };

  let platinumSeats = aircraftDetails ? aircraftDetails.Platinum_seats : 0;
  let businessSeats = aircraftDetails ? aircraftDetails.Business_seats : 0;
  let economySeats = aircraftDetails ? aircraftDetails.Economy_seats : 0;

  //the order for ids is: Platinum, Business, Economy
  let idsStart = 0;
  if (seatClass == "Business") {idsStart += platinumSeats}
  else if (seatClass == "Economy") {idsStart += platinumSeats + businessSeats}

  return (
    <>
      <h1>Seat Selection</h1>
      {seats.map((row) =>
        row.map((seat) => " | id: " + seat.id + " | reserved: " + seat.reserved)
      )}
      <Seats seats={seats} onSeatClick={handleSeatClick} />
    </>
  );
}

export default SeatSelection;
