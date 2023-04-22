import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import "../../Css_files/DoctorProfile.css";

const DoctorProfile = () => {
  const [updation, setUpdation] = useState(false);
  const doctor_obj = JSON.parse(localStorage.getItem("doctor"));
  const name = doctor_obj["doctorName"];
  const age = doctor_obj['age'];
  const specialization = doctor_obj['specialization'];
  const gender = doctor_obj['gender'];
  const phone_num = doctor_obj["contact"];
  const [docemail, setDocemail] = useState("sachin@gmail.com");
  const [docname, setDocname] = useState(name);
  const [docspec, setDocspec] = useState(specialization);
  const [docage, setDocage] = useState(age);
  const [docphone, setDocphone] = useState(phone_num);
  const saveUpdate = () => {
    console.log("Here in Save Update");
    setUpdation(!updation);
    //api call
  };
  return (
    <> 
      <div className="doctor_background">
      <SideNav />
      <div className="centere">
        <div className="card-bod">
          {updation === false ? (
            <div className="d-flex flex-column align-items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                className="rounded-circle"
                width="150"
              />
              <div className="mt-3">
                <h4>{docname}</h4>
                <p className="text-secondary mb-2 font-size-lg">
                  <h5>{docspec}</h5>
                </p>
                <p className="text-secondary mb-2 font-size-lg">
                  <h5>
                    {docphone}
                  </h5>
                </p>
                <p className="text-secondary mb-2 font-size-lg"><h5>{gender}</h5></p>
                <p className="text-muted font-size-sm"><h5>{docage}</h5></p>
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
              <div className="formup">
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
                            defaultValue={docname}
                            onChange={(e) => {setDocname(e.target.value)}}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="text-muted mb-0"
                            defaultValue={docemail}
                            onChange={(e) => {setDocemail(e.target.value)}}
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
                            type="text"
                            className="text-muted mb-0"
                            defaultValue={docphone}
                            onChange={(e) => {setDocphone(e.target.value)}}
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Specialization</p>
                        </div>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="text-muted mb-0"
                            defaultValue={docspec}
                            onChange={(e) => {setDocspec(e.target.value)}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {saveUpdate()}}
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

export default DoctorProfile;
