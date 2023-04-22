import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Css_files/Sidebar.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MedicationIcon from '@mui/icons-material/Medication';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import HomeIcon from '@mui/icons-material/Home';

const PatientSideNav = () => {

  const patient_obj=JSON.parse(localStorage.getItem('patient'));
  const patientNumber = patient_obj['phoneNumber'];
  const patientId = patient_obj['patinetId'];
  const navigate=useNavigate();

  const goToPrescriptions = () =>{
    navigate('/patientPrescriptionList');
  }

  const gotoPatientProfile=()=>{
    navigate('/PatientProfile');
  }

  
  const signOut=()=>{
    localStorage.removeItem('patient');
    localStorage.removeItem('token');
    localStorage.removeItem('patient_num');
    navigate('/login');
  }

  const SwitchUser=()=>{
    
    localStorage.removeItem('patient');
    
    navigate('/PatientPage',{
        state:{patientNum:patientNumber}
      })
  }

  const home=()=>{
    navigate('/PatientDashboard',{
      state:{patient_id:patientId}
   })
  }
  const goToHistory = () => {
    navigate('/patientHistory');
  }

  return (
    <>
      <div className="sidebar">
          <div className='sidediv'>
          <div className='sidebarRow' onClick={home}>
            <div className='sidebaricon'><HomeIcon/></div>
            <li className="sidebartitle">Home</li>
            </div>
            <div className='sidebarRow' onClick={gotoPatientProfile}>
            <div className='sidebaricon'><AccountBoxIcon/></div>
            <li className="sidebartitle">Profile</li>
            </div>
            <div className='sidebarRow' onClick={goToHistory}>
            <div className='sidebaricon'><ManageSearchIcon/></div>
            <li className="sidebartitle">History</li>
            </div>
            <div className='sidebarRow' onClick={goToPrescriptions}>
            <div className='sidebaricon'> <MedicationIcon/></div>
            <li className="sidebartitle">Prescriptions</li>
            </div>
            <div className='sidebarRow' onClick={SwitchUser}>
            <div className='sidebaricon'><SwitchAccountIcon/></div>
            <li className="sidebartitle" >Switch User</li>
            </div>
            <div className='sidebarRow' onClick={signOut}>
            <div className='sidebaricon'><ExitToAppOutlinedIcon/></div>
            <li className="sidebartitle" >Sign Out</li>
            </div>
            </div>
      
      </div>
    </>
  )
}

export default PatientSideNav
