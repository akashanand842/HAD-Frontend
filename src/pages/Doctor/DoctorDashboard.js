import React from "react";

import "../../Css_files/DoctorDashboard.css";

const DoctorDashboard = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="nav flex-column">
          <div className="d-grid gap-2 col-10 mx-auto">
          <button className="btn btn-primary" type="button">
              Home
            </button>
            <button className="btn btn-primary" type="button">
              Profile
            </button>
            <button className="btn btn-primary" type="button">
              History
            </button>
            <button className="btn btn-primary" type="button">
              Prescriptions
            </button>
            <button className="btn btn-primary" type="button">
              Sign Out
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default DoctorDashboard;
