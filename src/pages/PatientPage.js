import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function PatientPage() {
   const navigate=useNavigate();
   const handlePatientClick=(patientId)=>{
     navigate(`/PatientDashboard/${patientId}`)
   }  
    const [patientName,setPatientName] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/patient/patient-list/phone-number',{phoneNumber: '6397801245'})
        .then((response)=>{
            setPatientName(response.data.PatientPage);
        })
        .catch((error)=>{
            console.error('Error while getting the list of patient')
        });
    },[]);

  return (
    <div>
        <tbody>
      {patientName.map((patient)=>{ 
        <tr key={patient.patientId} onClick={()=>handlePatientClick(patient.patientId)} >
        <td>{patient.patientName}</td>
        <td>{patient.age}</td>
        </tr>
      })}
      </tbody>
    </div>
  )
}
