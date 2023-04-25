import React from "react";

function NavHead() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ border: "0px solid #eaf3f2", backgroundColor:"#EBF3F4"}}
    >
      <div className="container-fluid"> 
        <a className="navbar-brand" href="/">
          Tele-app
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                Contact us
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/aboutUs">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavHead;
