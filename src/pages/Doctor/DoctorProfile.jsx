import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import "../../Css_files/DoctorProfile.css";
import axios from "axios";

const DoctorProfile = () => {
  const lnkf =
    "https://static.vecteezy.com/system/resources/thumbnails/002/002/297/small/beautiful-woman-avatar-character-icon-free-vector.jpg";
  const lnkm = "https://bootdey.com/img/Content/avatar/avatar7.png";
  const [updation, setUpdation] = useState(false);
  const doctor_obj = JSON.parse(localStorage.getItem("doctor"));
  const doctorId = doctor_obj["doctorId"];
  const name = doctor_obj["doctorName"];
  const age = doctor_obj["age"];
  const specialization = doctor_obj["specialization"];
  const gender = doctor_obj["gender"];
  const email = doctor_obj["emailId"];
  const phone_num = doctor_obj["contact"];
  const [docemail, setDocemail] = useState(email);
  const [docname, setDocname] = useState(name);
  const [docspec, setDocspec] = useState(specialization);
  const [docage, setDocage] = useState(age);
  const [docphone, setDocphone] = useState(phone_num);
  const saveUpdate = async () => {
    const doc = {
      doctorName: docname,
      contact: docphone,
      specialization: docspec,
      gender: gender,
      age: docage,
      emailId: docemail,
    };
    console.log("Here in Save Update");
    setUpdation(!updation);
    await axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}/doctor/update-doctor/${doctorId}`, doc)
      .catch((err) => {
        console.error(err);
      });
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
                  src={gender === "Male" ? lnkm : lnkf}
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>{docname}</h4>
                  <p className="text-secondary mb-2 font-size-lg">
                    <h5>{docspec}</h5>
                  </p>
                  <p className="text-secondary mb-2 font-size-lg">
                    <h5>{docphone}</h5>
                  </p>
                  <p className="text-secondary mb-2 font-size-lg">
                    <h5>{gender}</h5>
                  </p>
                  <p className="text-muted font-size-sm">
                    <h5>{docage}</h5>
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
                              onChange={(e) => {
                                setDocname(e.target.value);
                              }}
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
                              onChange={(e) => {
                                setDocemail(e.target.value);
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
                              type="text"
                              className="text-muted mb-0"
                              defaultValue={docphone}
                              onChange={(e) => {
                                setDocphone(e.target.value);
                              }}
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
                              onChange={(e) => {
                                setDocspec(e.target.value);
                              }}
                            />
                          </div>
                        </div>
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

export default DoctorProfile;