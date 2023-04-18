import React  from 'react'
import Login from '../Patient/login'
import {Link,Navigate,useNavigate} from 'react-router-dom'
import NavHead from '../../components/Nav';
import '../../Css_files/Dashboard.css'

function Dashboard() {
    const navigate=useNavigate();
    const navigatePatientLogin=()=>{
        navigate('/login');
    }
    const navigateDoctorLogin=()=>{
        navigate('/doctor_login');
    }
    const gotoPrescription=()=>{
        navigate('/add-prescription',{
            state:{patient_id:2,doctor_id:2}
        });
    }
    const gotodownloadPrescription=()=>{
        navigate('/showPrescription')
    }
    const gotodownpatientpage=()=>{
        navigate('/PatientPage')
    }
    const navigateVideoCall=()=>{
        navigate('/roomPatient')
    }
    const gotoroomDoctor=()=>{
        navigate('/roomDoctor');
    }
    const gotoSignUpform=()=>{
        navigate('/signUp');
    }
    return (
        <>
        <NavHead/>
        <div className='card1'>
        <div className='card2' >
            <button onClick={navigatePatientLogin}>Login</button>  
            <button onClick={gotoSignUpform}>SignUP</button>
        </div>
        </div>
            </>
            )
}

            export default Dashboard;
