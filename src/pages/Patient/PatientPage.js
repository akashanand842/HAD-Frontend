import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import "../../Css_files/PatientPage.css";

export default function PatientPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const handlePatientClick = (patientId) => {
    navigate('/PatientDashboard',{
      state:{patient_id:patientId}
    })
  };
  const jwtToken=localStorage.getItem('token');
  console.log(jwtToken);
  //axios.defaults.headers.common['Authorization'] =`Bearer ${jwtToken}`;
  const [lists, setLists] = useState(true);
  const [patientList,setPatientList] = useState([]);
  console.log(location.state.patientNum);
  useEffect(()=>{
      axios.get('http://localhost:8081/patient/patient-list/phone-number',{
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'content-type': 'application/json'
        },
        params: {phoneNumber: `${location.state.patientNum}`}
      })
      .then((response)=>{
        console.log(response.data);
        console.log("Here in promis");
          setPatientList(response.data);
      })
      .catch((error)=>{
          console.error('Error while getting the list of patient', error);
      });
  },[]);
  return (
    <>
    {lists===true? (
      <div className="blockCss">
         {patientList.map((patient,index)=>(
            <div key={index} className="cursor" onClick={()=>handlePatientClick(patient.patientId)} >
                <div className="adjust">
                      <h5>{patient.patientName} {patient.age}</h5>
                </div>
            </div>
         ))} 
        <button className="make-button" onClick={()=>setLists(false)}>+ Add New</button>
     </div>
    ):(
           <div className="myBox">
             <div className="prescription-form">
                <h2>Registration</h2>
                <form>
                  <label>
                    Name:
                    <input type="text" />
                  </label>

                  <label>
                    Age:
                    <input type="text" />
                  </label>
                  <label>
                    Phone Number:
                    <input type="text" readOnly />
                  </label>
                  <label>
                    Gender:
                    <input type="text" />
                  </label>
                  <label>
                    Medical History:
                    <input type="text" />
                  </label>
                  <button className="btn btn-success" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
    )}
    
    </>
  );
}
