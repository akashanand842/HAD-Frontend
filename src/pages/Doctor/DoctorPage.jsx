import React from 'react'
import SideNav from '../../components/SideNav';
import "../../Css_files/DoctorPage.css"

const DoctorPage = () => {
  const doctor_obj=JSON.parse(localStorage.getItem('doctor'));
  const name=doctor_obj['doctorName']
  
  return (
    <>
    <SideNav/>
    <div className='doctor_css'>
     <h3 >Hello {name} </h3>
      <div>Welcome To Your Dashboard</div> 
    </div>
    </>
  )
}

export default DoctorPage
