import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function PatientPage() {
   const navigate=useNavigate();
   const handlePatientClick=(patientId)=>{
     navigate(`/PatientDashboard/${patientId}`)
   }  
    const [patientList,setPatientList] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/patient/patient-list/phone-number',{
          params: {phoneNumber: '6397801245'}
        })
        .then((response)=>{
          console.log(response);
            setPatientList(response.data);
        })
        .catch((error)=>{
            console.error('Error while getting the list of patient')
        });
    },[]);
  return (
      //   <table>
      // {patientList.map((patient)=>{ 
      //   <tr key={patient.patientId} onClick={()=>handlePatientClick(patient.patientId)} >
      //   {<td>{patient.patientName}</td>}
      //   {<td>{patient.age}</td>}
      //   </tr>
      // })}
      // </table>
    <table>
      {patientList.map((patient)=>(
        <tr key={patient.patientId} onClick={()=>handlePatientClick(patient.patientId)}>
          {Object.values(patient).map((val)=>(
            <td>{val}</td>
          ))}
          {/* {<td>{patient.patientName}</td>} */}
        </tr>
      ))}
    </table>
  )
}
