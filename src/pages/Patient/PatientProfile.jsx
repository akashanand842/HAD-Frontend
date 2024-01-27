import React from "react";
import PatientSideNav from "../../components/PatientSideNav";
import "../../Css_files/PatientProfile.css";

const PatientProfile = () => {

  const patient_obj = JSON.parse(localStorage.getItem("patient"));
  const PName = patient_obj["patientName"];
  const name = PName.toUpperCase();
  const age = patient_obj["age"];
  const gender = patient_obj["gender"];
  const phone_num = patient_obj["phoneNumber"];

  const lnkf =
    "https://static.vecteezy.com/system/resources/thumbnails/002/002/297/small/beautiful-woman-avatar-character-icon-free-vector.jpg";
  const lnkm = "https://bootdey.com/img/Content/avatar/avatar7.png";

  return (
    <>
      <div className="background-img">
        <PatientSideNav />
        <div className="centeree">
          <div className="card-bodd">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={gender === "Male" ? lnkm : lnkf}
                  className="rounded-circle"
                  width="150" alt="Profile-pic"
                />
                <div className="mt-3">
                  <h4>Name: {name}</h4>
                  <p className="text-secondary mb-2 font-size-lg">
                    <h5>Phone: {phone_num}</h5>
                  </p>
                  <p className="text-secondary mb-2 font-size-lg">
                    <h5>Gender: {gender}</h5>
                  </p>
                  <p className="text-muted font-size-sm">
                    <h5>Age: {age}</h5>
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientProfile;