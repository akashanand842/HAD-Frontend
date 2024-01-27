import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import "../../Css_files/PatientDashboard.css";
import PatientSideNav from '../../components/PatientSideNav';


export default function PatientDashboard() {
  const navigate=useNavigate();
  const [name,setName] = useState('');

  const patient_obj=JSON.parse(localStorage.getItem('patient'));

  useEffect(()=>{
    setName(patient_obj['patientName']);
  },[])

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
