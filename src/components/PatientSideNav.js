import React from 'react'
import "../Css_files/Sidebar.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MedicationIcon from '@mui/icons-material/Medication';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useNavigate } from 'react-router-dom';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

const PatientSideNav = () => {

  const navigate=useNavigate();
  
  const signOut=()=>{
    localStorage.removeItem('patient');
    navigate('/patient_login');
  }

  const SwitchUser=()=>{
    
    const patient_obj=JSON.parse(localStorage.getItem('patient'));
    const patientNumber = patient_obj['phoneNumber'];
  
    localStorage.removeItem('patient');
    navigate('/PatientPage',{
        state:{patientNum:patientNumber}
      })
  }

  return (
    <>
      <div className="sidebar">
          <div className='sidediv'>
            <div className='sidebarRow'>
            <div className='sidebaricon'><AccountBoxIcon/></div>
            <li className="sidebartitle">Profile</li>
            </div>
            <div className='sidebarRow'>
            <div className='sidebaricon'><ManageSearchIcon/></div>
            <li className="sidebartitle">History</li>
            </div>
            <div className='sidebarRow'>
            <div className='sidebaricon'> <MedicationIcon/></div>
            <li className="sidebartitle">Prescriptions</li>
            </div>
            <div className='sidebarRow'>
            <div className='sidebaricon'><SwitchAccountIcon/></div>
            <li className="sidebartitle" onClick={SwitchUser}>Switch User</li>
            </div>
            <div className='sidebarRow'>
            <div className='sidebaricon'><ExitToAppOutlinedIcon/></div>
            <li className="sidebartitle" onClick={signOut}>Sign Out</li>
            </div>
            </div>
      
      </div>
    </>
  )
}

export default PatientSideNav
