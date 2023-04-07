import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import "../../Css_files/PatientPage.css";
import { type } from "@testing-library/user-event/dist/type";
import NavHead from "../../components/Nav";

export default function PatientPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const [lists, setLists] = useState(true);
  const [patientList,setPatientList] = useState([]);
  const jwtToken=localStorage.getItem('token');
  console.log(jwtToken);

  const handlePatientClick = (patientId,index) => {
    
    localStorage.setItem('patient', JSON.stringify(patientList[index]));

    navigate('/PatientDashboard',{
      state:{patient_id:patientId}
    })
  };
  
  console.log(location.state.patientNum);

  axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;

  useEffect(()=>{
      axios.get('http://localhost:8081/patient/patient-list/phone-number',{
        params: {phoneNumber: `${location.state.patientNum}`}
      })
      .then((response)=>{
        console.log(response.data);
          setPatientList(response.data);
      })
      .catch((error)=>{
          console.error('Error while getting the list of patient')
      });
  },[]);

  return (
    <>
    <NavHead/>
    {lists===true? (
      <div className="blockCss">
         {patientList.map((patient,index)=>(
            <div key={index} className="cursor" onClick={()=>handlePatientClick(patient.patientId,index)} >
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
