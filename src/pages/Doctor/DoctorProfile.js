import React, { useState } from "react";
import "../../Css_files/DoctorProfile.css";

const DoctorProfile = () => {
  const [email, setEmail] = useState('sachin@gmail.com')
  return (
    <>
      <div className="centered">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                className="rounded-circle"
                width="150"
              />
              <div className="mt-3">
                <h4>Dr. Sachin Singh </h4>
                <p className="text-secondary mb-2 font-size-lg">
                  General Physician
                </p>
                <p className="text-secondary mb-2 font-size-lg">
                  9483726100
                </p>
                <p className="text-secondary mb-2 font-size-lg">
                  Male
                </p>
                <p className="text-muted font-size-sm">
                  {email}
                </p>
                <span>
                <button className="btn btn-primary">Update</button>
                </span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default DoctorProfile;
