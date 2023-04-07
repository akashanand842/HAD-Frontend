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
        //const roomId= Math.floor(Math.random()*1000000);
        navigate('/roomPatient')
    }
    const gotoroomDoctor=()=>{
        navigate('/roomDoctor');
    }
    return (
        <>
        <NavHead/>
        <div className='card1'>
        {/* <div className='card2'> */}
        <div className='card2' >
            {/* <div className='card2'> */}
                <button onClick={navigatePatientLogin}>Login</button>
                
                <button>SignUP</button>
                {/* </div> */}
        </div>
        {/* </div> */}

        
        </div>
            {/* <div className="row col-sm-4 mx-auto mt-3">
                <div className="col">
                    <div className="card">
                        <img src="./img.svg/patient_img.png" style={{width:'150px', height: '150px'}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Patient</h5>
                            <button type="button" class="btn btn-success" onClick={navigatePatientLogin}>Login</button>  
                            <button type="button" class="btn btn-success" onClick={navigateVideoCall}>VideoCall</button>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col">
                    <div className="card">
                        <img src="./img.svg/doctor_img.jpg" style={{widht:'150px', height:'150px'}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Doctor</h5>
                            <button type="button" class="btn btn-primary" onClick={navigateDoctorLogin}>Login</button>
                            <button type="button" class="btn btn-primary" onClick={gotoPrescription}>Add presc.</button>
                            <button type="button" class="btn btn-primary" onClick={gotoroomDoctor}>video call.</button>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
            </>
            )
}

            export default Dashboard;
