import React from "react";
import PatientSideNav from "../../components/PatientSideNav";
import "../../Css_files/PatientProfile.css";
import { useState } from "react";

const PatientProfile = () => {
  const [updation, setUpdation] = useState(false);
  const patient_obj = JSON.parse(localStorage.getItem("patient"));
  const PName = patient_obj["patientName"];
  const name = PName.toUpperCase();
  const age = patient_obj["age"];
  const medical_history = patient_obj["medicalHistory"];
  const gender = patient_obj["gender"];
  const phone_num = patient_obj["phoneNumber"];

  const [patname, setPatname] = useState(name);
  const [patmedhis, setPatmedhis] = useState(medical_history);
  const [patgen, setPatgen] = useState(gender);
  const [patage, setPatage] = useState(age);
  const [patphone, setPatphone] = useState(phone_num);
  
  const saveUpdate = () => {
    console.log("Here in Save Update");
    setUpdation(!updation);
    //api call
  };
  return (
    <>
      <div className="background-img">
        <PatientSideNav />
        <div className="centeree">
          <div className="card-bodd">
            {updation === false ? (
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>Name: {patname}</h4>
                  {/* <p className="text-secondary mb-2 font-size-lg">
                  <h5>{patmedhis}</h5>
                </p> */}
                  <p className="text-secondary mb-2 font-size-lg">
                    <h5>Phone: {patphone}</h5>
                  </p>
                  <p className="text-secondary mb-2 font-size-lg">
                    <h5>Gender: {patgen}</h5>
                  </p>
                  <p className="text-muted font-size-sm">
                    <h5>Age: {patage}</h5>
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setUpdation(true)}
                  >
                    Update
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="formupp">
                  <div className="col-lg-10">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="text-muted mb-0"
                              defaultValue={patname}
                              onChange={(e) => {
                                setPatname(e.target.value.toUpperCase());
                              }}
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Medical History</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="text-muted mb-0"
                              defaultValue={patmedhis}
                              onChange={(e) => {
                                setPatmedhis(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Phone</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              disabled
                              type="text"
                              className="text-muted mb-0"
                              defaultValue={patphone}
                              onChange={(e) => {
                                setPatphone(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        {/* <hr /> */}
                        {/* <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Specialization</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="text-muted mb-0"
                            defaultValue={docspec}
                            onChange={(e) => {
                              setDocspec(e.target.value);
                            }}
                          />
                        </div>
                      </div> */}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => {
                        saveUpdate();
                      }}
                    >
                      Success
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientProfile;