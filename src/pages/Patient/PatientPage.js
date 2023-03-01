import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PatientPage() {
  const navigate = useNavigate();
  const handlePatientClick = (patientId) => {
    navigate(`/PatientDashboard/${patientId}`);
  };
  // const [patientList,setPatientList] = useState([]);
  const patientList = [
    {
      name: "Akash",
      age: 22,
    },
    {
      name: "Yasha",
      age: 22,
    },
    {
      name: "Yash",
      age: 23,
    },
    {
      name: "Aryan",
      age: 26,
    },
  ];
  // useEffect(()=>{
  //     axios.get('http://localhost:8081/patient/patient-list/phone-number',{
  //       params: {phoneNumber: '6397801245'}
  //     })
  //     .then((response)=>{
  //       console.log(response);
  //         setPatientList(response.data);
  //     })
  //     .catch((error)=>{
  //         console.error('Error while getting the list of patient')
  //     });
  // },[]);
  return (
    //   <table>
    // {patientList.map((patient)=>{
    //   <tr key={patient.patientId} onClick={()=>handlePatientClick(patient.patientId)} >
    //   {<td>{patient.patientName}</td>}
    //   {<td>{patient.age}</td>}
    //   </tr>
    // })}
    // </table>
    // <table>
    //   {patientList.map((patient)=>(
    //     <tr key={patient.patientId} onClick={()=>handlePatientClick(patient.patientId)}>
    //       {Object.values(patient).map((val)=>(
    //         <td>{val}</td>
    //       ))}
    //       {/* {<td>{patient.patientName}</td>} */}
    //     </tr>
    //   ))}
    // </table>

    <>
      <body style={{ backgroundColor: '#e5f6fa', color: 'rgb(10, 110, 172)', height: '600px' }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          color: 'rgb(222, 241, 241)'
        }}
      >
        <div
          className="centered"
          style={{ width: "300px", padding: "30px", border: "2px solid #ccc", backgroundColor: 'rgb(221, 235, 235)'}}
        >
          {patientList.map((patient, index) => (
            <a href="/patient_login" style={{ textDecoration: "none" }}>
              <div
                key={index}
                className="card border-dark text-bg-light mb-3"
                style={{
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  backgroundColor: "#fff",
                  color: "#333",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(0, 0, 0, 0.5)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 5px rgba(0, 0, 0, 0.3)")
                }
              >
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {patient.name} {patient.age}
                  </h5>
                </div>
              </div>
            </a>
          ))}
          <button type="button" class="btn btn-outline-dark"> + Add New </button>
        </div>
      </div>
      </body>
    </>
  );
}
