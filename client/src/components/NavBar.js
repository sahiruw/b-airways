import React, { useEffect, useState } from "react";

function NavBar() {
  const [loggedUser, setLoggeduser] = useState(null);

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

  const logout = (e) => {
    e.preventDefault();

    fetch("/api/logout", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        document.location.replace("/");
      })
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
          B-Airways
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a href="/#section3" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item active">
              <a href="/flights" className="nav-link">
                Flights
              </a>
            </li>

            {loggedUser ? (
              <>
                {" "}
                <li className="nav-item active">
                  <a href="/" className="nav-link">
                    {loggedUser}
                  </a>
                </li>
                <li className="nav-item active">
                  <button onClick={(e) => logout(e)}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item active">
                  <a href="/login" className="nav-link">
                    Login
                  </a>
                </li>

                <li className="nav-item active">
                  <a href="/register" className="nav-link">
                    Register
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
