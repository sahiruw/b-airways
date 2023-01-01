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
    fetch("/api/getAircraftDetailsByID?aircraftID=" + props.flightID)
      .then((res) => res.json())
      .then((data) => {
        setairecraftDetails(data.data);
      });
  }, []);

  useEffect(() => {
    fetch("/api/getReservedSeats?flightID=" + props.flightID)
    .then((res) => res.json())
    .then((data) => {
      setBookedSeatIds(data.data);
    });
  }, [aircraftDetails]);

  useEffect(() => {
    
    let platinumSeats = aircraftDetails.platinum_seats;
    let businessSeats = aircraftDetails.Bussiness_seats;
    let economySeats = aircraftDetails.Economy_seats;

    //the order for ids is: Platinum, Business, Economy
    let idsStart = 0;
    let totalSeatsofClass = platinumSeats;
    let seatsPerRow = aircraftDetails
      ? aircraftDetails.platinum_seats_per_row
      : 3;
    if (seatClass == "Business") {
      idsStart += platinumSeats;
      totalSeatsofClass = idsStart + businessSeats;
      seatsPerRow = aircraftDetails
        ? aircraftDetails.business_seats_per_row
        : 3;
    } else if (seatClass == "Economy") {
      idsStart += platinumSeats + businessSeats;
      totalSeatsofClass = idsStart + economySeats;
      seatsPerRow = aircraftDetails ? aircraftDetails.economy_seats_per_row : 3;
    }

    let seatsTemp = [];
    for (let i = idsStart; i < totalSeatsofClass; i++) {
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
    console.log(groups[0]);
  }, [bookedSeatIds]);

  const handleSeatClick = (id, reservedd) => {
    setSeats((prevSeats) =>
      prevSeats.map((row) =>
        row.map((seat) => (seat.id === id ? { ...seat, reserved :reservedd} : seat))
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
