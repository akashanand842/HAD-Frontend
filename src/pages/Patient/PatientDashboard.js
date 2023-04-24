import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../../Css_files/PatientDashboard.css";
import RegistrationForm from './RegistrationForm';
import PatientSideNav from '../../components/PatientSideNav';
import NavHead from '../../components/Nav';


export default function PatientDashboard() {
  const navigate=useNavigate();
  const [name,setName] = useState('');

  const patient_obj=JSON.parse(localStorage.getItem('patient'));

  useEffect(()=>{
    setName(patient_obj['patientName']);
  })

 console.log(name);

  return (
    <>
    <div className='background-img'>
    <PatientSideNav/>
    <h1 className='txt-css'>{name}</h1> 
    <h2 className='txt-css2'>Welcome To Your Dashboard</h2> 
    <div className='centered'>
      <div>
      <button onClick={()=>{ navigate('/registrationForm')}}>Appointment</button>
      </div>
    </div>
    </div>
    </>
  )
}
