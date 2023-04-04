import React from 'react'
import "../Css_files/Sidebar.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MedicationIcon from '@mui/icons-material/Medication';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const SideNav = () => {
  const navigate=useNavigate();
  
  const signOut=()=>{
    localStorage.removeItem('doctor');
    navigate('/doctor_login');
  }

  const profile =()=>{
    navigate('/DoctorProfile');
  }

  const home =()=>{
    navigate('/DoctorPage');
  }

  return (
    <>
      <div className="sidebar">
          <div className='sidediv'>
            <div className='sidebarRow' onClick={home}>
            <div className='sidebaricon'><HomeIcon/></div>
            <li className="sidebartitle">Home</li>
            </div>
            <div className='sidebarRow' onClick={profile}>
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
            <div className='sidebarRow' onClick={signOut}>
            <div className='sidebaricon'><ExitToAppOutlinedIcon/></div>
            <li className="sidebartitle">Sign Out</li>
            </div>
            </div>
      
      </div>
    </>
  )
}

export default SideNav
