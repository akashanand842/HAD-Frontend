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
const gotodownloadPrescription=()=>{
  navigate('/showPrescription')
}

const navigateVideoCall=()=>{
  navigate('/roomPatient')
}
  return (
    <>
    <div className='background-img'>
    <PatientSideNav/>
    {/* <NavHead/> */}
    <h1 className='txt-css'>{name}</h1> 
    <h2 className='txt-css2'>Welcome To Your Dashboard</h2> 
    <div className='centered'>
      <div>
      <button type="button" class="btn btn-primary" onClick={gotodownloadPrescription}>Download pres.</button> 
      <button onClick={()=>{ navigate('/registrationForm')}}>Appointment</button>  
      {/* <button onClick={navigateVideoCall}>videoCall</button> */}
      </div>
    </div>
    </div>
    </>
  )
}
