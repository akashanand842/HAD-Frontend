import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../../Css_files/PatientDashboard.css";
import RegistrationForm from './RegistrationForm';
import PatientSideNav from '../../components/PatientSideNav';
import NavHead from '../../components/Nav';


export default function PatientDashboard() {
  const location=useLocation();
  const [patient,setPatient]=useState([]);
  const pid=location.state.patient_id;
  const navigate=useNavigate();

  const patient_obj=JSON.parse(localStorage.getItem('patient'));
  const name = patient_obj['patientName'];
  
 console.log(name);
//   useEffect(()=>{
//     axios.get(`http://localhost:8081/patient/get-patient/${pid}`)
//     .then((response)=>{
//       console.log(response.data);
//       setPatient(response.data);
//     })
//     .catch((error)=>{
//         console.error('Error while getting patient')
//     });
// },[]);
const gotodownloadPrescription=()=>{
  navigate('/showPrescription')
}
 
  return (
    <>
    <PatientSideNav/>
    {/* <NavHead/> */}
    <div className='centered'>
      <b>Hello {name} Welcome To Your Dashboard</b> 
      <div>
      <button type="button" class="btn btn-primary" onClick={gotodownloadPrescription}>Download pres.</button> 
      <button>Registration</button>  
      </div>
    </div>
    </>
  )
}
