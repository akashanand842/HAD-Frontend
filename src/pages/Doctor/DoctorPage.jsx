import React from 'react'
import SideNav from '../../components/SideNav';
import "../../Css_files/DoctorPage.css"
import { useNavigate } from 'react-router-dom';

const DoctorPage = () => {
  
  const doctor_obj = JSON.parse(localStorage.getItem('doctor'));
  const name = doctor_obj['doctorName']
  const navigate = useNavigate();

  const gotoroomDoctor = ()=>{
    navigate('/roomDoctor');
}
  
  return (
    <>
    <SideNav/>
    <div className='doctor_css'>
     <h3 >Hello {name} </h3>
      <div>Welcome To Your Dashboard</div>
      <button onClick={gotoroomDoctor}>Accept VC</button>
    </div>
    </>
  )
}

export default DoctorPage
