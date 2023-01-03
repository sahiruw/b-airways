import React from "react";
import { useState, useEffect } from "react";
import SeatSelection from "./seatSelection";
import DetailForm from "./detailForm";

function Booking(props) {
  const [loggedUser, setLoggeduser] = useState(null);
  const [userSelectedSeats, setUserSelectedSeats] = useState([]);
  const [userData, setUserData] = useState({});
  const [isloggeduserpassenger, setisloggeduserpassenger] = useState(false);

  useEffect(() => {
    fetch("/api/isLogged")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setLoggeduser(data.user);
        } else {
          setLoggeduser(null);
        }
      });
  }, []);

  const handleCheckLoggedUserisPassenger = (e) => {
    if (e.target.checked) {
      setisloggeduserpassenger(true);
    } else setisloggeduserpassenger(false);
  };

  const submit = (e) => {
    let dataforbackend = [];
    for (let id in userSelectedSeats) {
      dataforbackend.push([userSelectedSeats[id], userData[id]]);
    }

    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ dataforbackend}),
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      res.json().then((data) => {

      })
    );
  };

  const style_card = {
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
    paddingTop: 5,
  };
  let sc = 2;

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded" style={style_card}>
      {loggedUser ? (
        <div className="form-check form-switch">
          <label class="form-check-label" htmlfor="flexSwitchCheckChecked">
            Is the logged user a passenger?{" "}
            {isloggeduserpassenger ? "Yes" : "No"}
          </label>

          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            onChange={handleCheckLoggedUserisPassenger}
          />
        </div>
      ) : (
        ""
      )}

      {Array.from(Array(sc).keys()).map((i) => (
        <DetailForm
          id={i}
          loggedUserEmail={loggedUser}
          udata={userData}
          setudata={setUserData}
          isloggeduserpassenger={isloggeduserpassenger}
        />
      ))}

      <SeatSelection
        flightID={2}
        seatClass="Economy"
        seatCount={sc}
        setUserSelectedSeats={setUserSelectedSeats}
      />
      <button
        type="submit"
        className="btn btn-primary btn-lg btn-block"
        onClick={(e) => submit(e)}
      >
        Fuck you
      </button>
    </div>
  );
}

export default Booking;