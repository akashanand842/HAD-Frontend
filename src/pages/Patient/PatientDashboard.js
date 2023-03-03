import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../../Css_files/PatientDashboard.css";

export default function PatientDashboard() {
  const location=useLocation();
  const [patient,setPatient]=useState([]);
  const pid=location.state.patient_id;
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get(`http://localhost:8081/patient/get-patient/${pid}`)
    .then((response)=>{
      console.log(response.data);
      setPatient(response.data);
    })
    .catch((error)=>{
        console.error('Error while getting patient')
    });
},[]);
const gotodownloadPrescription=()=>{
  navigate('/showPrescription')
}
  return (
    <div className='centered'>
      <b>Hello {patient.patientName} Welcome To Your Dashboard</b> 
      <div>
      <button type="button" class="btn btn-primary" onClick={gotodownloadPrescription}>Download pres.</button>   
      </div>
    </div>
  )
}
