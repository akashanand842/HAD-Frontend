import React  from 'react'
import Login from '../Patient/login'
import {Link,Navigate,useNavigate} from 'react-router-dom'
import NavHead from '../../components/Nav';

function Dashboard() {
    const navigate=useNavigate();
    const navigatePatientLogin=()=>{
        navigate('/patient_login');
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
        const roomId= Math.floor(Math.random()*1000000);
        navigate(`/room/${roomId}`)
    }
    const gotoroomDoctor=()=>{
        navigate('/roomDoctor');
    }
    return (
        <>
        <NavHead/>
            <div className="row col-sm-4 mx-auto mt-3">
                <div className="col">
                    <div className="card">
                        <img src="./img.svg/patient_img.png" style={{width:'150px', height: '150px'}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Patient</h5>
                            <button type="button" class="btn btn-success" onClick={navigatePatientLogin}>Login</button>  
                            <button type="button" class="btn btn-success" onClick={navigateVideoCall}>VideoCall</button>
                            {/* <button type="button" class="btn btn-primary" onClick={gotodownloadPrescription}>Prescription Download</button> */}
                            {/* <button type="button" class="btn btn-primary" onClick={gotodownpatientpage}>patientpages</button> */}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./img.svg/doctor_img.jpg" style={{widht:'150px', height:'150px'}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Doctor</h5>
                            <button type="button" class="btn btn-primary" onClick={navigateDoctorLogin}>Login</button>
                            <button type="button" class="btn btn-primary" onClick={gotoPrescription}>Add presc.</button>
                            <button type="button" class="btn btn-primary" onClick={gotoroomDoctor}>video call.</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
            )
}

            export default Dashboard;
