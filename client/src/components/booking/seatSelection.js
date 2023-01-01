import React, { useEffect, useState } from "react";

const Seat = ({ id, reserved, onClick, isDiabled, remainintCT, seatClass }) => {
  const [isChecked, setIsChecked] = useState(reserved);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onClick(id, !isChecked);
  };

  return (
    <td>
      <div className="seat">
        <input
          className="btn-check"
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleClick}
          disabled={
            isDiabled || (!isChecked && remainintCT < 1) ? "disabled" : ""
          }
        />
        <label
          className={
            "btn btn-outline-" + (seatClass == "Platinum"
              ? "warning"
              : seatClass == "Economy"
              ? "primary"
              : "success")
          }
          htmlFor={id}
        >
          {id}
        </label>
        <br></br>
      </div>
    </td>
  );
};

const Seats = ({ seats, onSeatClick, remainintCT, seatClass }) => {
  return (
    <table className="table table-borderless text-center mx-auto w-auto">
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
                  remainintCT={remainintCT}
                  seatClass={seatClass}
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
  let seatClass = props.seatClass;

  const [seats, setSeats] = useState([]);
  const [bookedSeatIds, setBookedSeatIds] = useState([]);
  const [remainingSelections, setRemaininSelections] = useState(0);
  const [totalBookedSeatsOfClass, setTotalBookedSeatsOfClass] = useState(0);

  useEffect(() => {
    fetch("/api/getAircraftDetailsByID?aircraftID=" + props.flightID)
      .then((res) => res.json())
      .then((data) => {
        setairecraftDetails(data.data);
      });
  }, [props.flightID]);

  useEffect(() => {
    fetch("/api/getReservedSeats?flightID=" + props.flightID)
      .then((res) => res.json())
      .then((data) => {
        setBookedSeatIds(data.data);
      });
  }, [aircraftDetails, props.flightID]);

  useEffect(() => {
    let platinumSeats = aircraftDetails.platinum_seats;
    let businessSeats = aircraftDetails.Bussiness_seats;
    let economySeats = aircraftDetails.Economy_seats;

    //the order for ids is: Platinum, Business, Economy
    let idsStart = 0;
    let idsEnd = platinumSeats;
    let seatsPerRow = aircraftDetails
      ? aircraftDetails.platinum_seats_per_row
      : 3;
    if (seatClass === "Business") {
      idsStart += platinumSeats;
      idsEnd = idsStart + businessSeats;
      seatsPerRow = aircraftDetails
        ? aircraftDetails.business_seats_per_row
        : 3;
    } else if (seatClass === "Economy") {
      idsStart += platinumSeats + businessSeats;
      idsEnd = idsStart + economySeats;
      seatsPerRow = aircraftDetails ? aircraftDetails.economy_seats_per_row : 3;
    }

    let seatsTemp = [];
    let reservedCt = 0;
    for (let i = idsStart; i < idsEnd; i++) {
      let alreadyReserved = bookedSeatIds.includes(i);
      if (alreadyReserved) reservedCt++;
      seatsTemp.push({
        id: i,
        reserved: alreadyReserved ? true : false,
        isDiabled: alreadyReserved ? true : false,
      });
    }
    setTotalBookedSeatsOfClass(reservedCt);
    const groups = [];

    for (let i = 0; i < seatsTemp.length; i += seatsPerRow) {
      groups.push(seatsTemp.slice(i, i + seatsPerRow));
    }
    setSeats(groups);
  }, [bookedSeatIds, seatClass]);

  useEffect(() => {
    let count = [];
    let usseats = [];
    for (let row of seats) {
      for (let seat of row) {
        if (seat.reserved) {
          if(!seat.isDiabled){usseats.push(seat.id)}
          count++;
        }
      }
    }
    props.setUserSelectedSeats(usseats);
    count = totalBookedSeatsOfClass + props.seatCount - count;
    setRemaininSelections(count);
  }, [seats, bookedSeatIds, props.seatCount]);

  const handleSeatClick = (id, reservedd) => {
    setSeats((prevSeats) =>
      prevSeats.map((row) =>
        row.map((seat) =>
          seat.id === id ? { ...seat, reserved: reservedd } : seat
        )
      )
    );
  };

  return (
    <div className="shadow-lg  mb-5 bg-white rounded text-center">
      <h4>Seat Selection</h4>
      {remainingSelections} left to select
      {/* {seats.map((row) =>
        row.map((seat) => " | id: " + seat.id + " | reserved: " + seat.reserved)
      )} */}
      <Seats
        seats={seats}
        onSeatClick={handleSeatClick}
        remainintCT={remainingSelections}
        seatClass={seatClass}
      />
    </div>
  );
}

export default SeatSelection;
