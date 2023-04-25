import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Css_files/PatientPage.css";
import NavHead from "../../components/Nav";


export default function PatientPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const gotologin=()=>{
    navigate('/login');
  }

  const [patientList, setPatientList] = useState([]);
  const jwtToken = localStorage.getItem("token");
  console.log(jwtToken);

  const handlePatientClick = (patientId, index) => {
    localStorage.setItem("patient", JSON.stringify(patientList[index]));

    navigate("/PatientDashboard", {
      state: { patient_id: patientId },
    });
  };

  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/patient/patient-list/phone-number`, {
        params: { phoneNumber: `${location.state.patientNum}` },
      })
      .then((response) => {
        console.log(response.data);
        setPatientList(response.data);
      })
      .catch((error) => {
        console.error("Error while getting the list of patient");
        if(error.response.status===403)
        {
          alert('login again');
          navigate('/login');
        }
      });
  },);

  return (

    <>
      <NavHead />
      <div className="patient_background">
        <div className="temp">
          <div className="blockCss" id="style-15">
            {patientList.map((patient, index) => (
              <div
                key={index}
                className="cursor"
                onClick={() => handlePatientClick(patient.patientId, index)}
              >
                <div className="adjust">
                  <h5>
                    {patient.patientName} {patient.age}
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <button className="make-button" onClick={() => navigate("/addNew")}>
            + Add New
          </button>
        </div>
      </div>
    </>
  );
}
