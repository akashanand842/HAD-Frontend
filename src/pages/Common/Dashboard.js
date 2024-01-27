import React  from 'react'
import {useNavigate} from 'react-router-dom'
import NavHead from '../../components/Nav';
import '../../Css_files/Dashboard.css'

function Dashboard() {
    const navigate=useNavigate();
    const navigatePatientLogin=()=>{
        navigate('/login');
    }

    const gotoSignUpform=()=>{
        navigate('/signUp');
    }
    localStorage.clear();
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
