import React, { useEffect, useState } from "react";

const Seat = ({ id, reserved, onClick, isDiabled }) => {
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
          disabled={isDiabled ? "disabled" : ""}
        />
        <label htmlFor={id}>{id}</label>
      </div>
    </td>
  );
};

const Seats = ({ seats, onSeatClick }) => {
  return (
    <table className="seats">
      <tbody>
        {seats.map((row) => {
          return (
            <tr>
              {row.map((seat) => (
                <Seat
                  id={seat.id}
                  reserved={seat.reserved}
                  onClick={onSeatClick}
                  isDiabled={seat.isDiabled}
                />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

function SeatSelection(props) {
  const [aircraftDetails, setairecraftDetails] = useState([]);
  let seatClass = props.seatClass || "Platinum";

  const [seats, setSeats] = useState([]);
  const [bookedSeatIds, setBookedSeatIds] = useState([]);

  useEffect(() => {
    fetch("/api/getAircraftDetailsByID?aircraftID=" + props.aircraftID)
      .then((res) => res.json())
      .then((data) => {
        setairecraftDetails(data.data);
      });

    fetch("/api/getReservedSeats?flightID=" + props.flightID)
      .then((res) => res.json())
      .then((data) => {
        setBookedSeatIds(data.data);
      });
  }, []);

  useEffect(() => {
    let platinumSeats = aircraftDetails.platinum_seats;
    let businessSeats = aircraftDetails.Bussiness_seats;
    let economySeats = aircraftDetails.Economy_seats;

    //the order for ids is: Platinum, Business, Economy
    let idsStart = 0;
    let seatCount = platinumSeats;
    let seatsPerRow = aircraftDetails
      ? aircraftDetails.platinum_seats_per_row
      : 3;
    if (seatClass == "Business") {
      idsStart += platinumSeats;
      seatCount = idsStart + businessSeats;
      seatsPerRow = aircraftDetails
        ? aircraftDetails.business_seats_per_row
        : 3;
    } else if (seatClass == "Economy") {
      idsStart += platinumSeats + businessSeats;
      seatCount = idsStart + economySeats;
      seatsPerRow = aircraftDetails ? aircraftDetails.economy_seats_per_row : 3;
    }

    let seatsTemp = [];
    for (let i = idsStart; i < seatCount; i++) {
      seatsTemp.push({
        id: i,
        reserved: bookedSeatIds.includes(i) ? true : false,
        isDiabled: bookedSeatIds.includes(i) ? true : false,
      });
    }
    const groups = [];

    for (let i = 0; i < seatsTemp.length; i += seatsPerRow) {
      groups.push(seatsTemp.slice(i, i + seatsPerRow));
    }
    setSeats(groups);
  }, [aircraftDetails, bookedSeatIds]);

  const handleSeatClick = (id, reserved) => {
    setSeats((prevSeats) =>
      prevSeats.map((row) =>
        row.map((seat) => (seat.id === id ? { ...seat, reserved } : seat))
      )
    );
  };

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
