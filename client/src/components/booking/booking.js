import React from "react";

function Booking() {
  const submit = (e) => {
    e.preventDefault();
    let id = 12;
    let username = "sahiruw";
    fetch("/api/getuser")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      });
  };

  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => submit(e)}
      >
        Fuck you
      </button>
    </div>
  );
}

export default Booking;
