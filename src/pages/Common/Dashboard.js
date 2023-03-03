import React  from 'react'
import Login from '../Patient/login'
import {Link,Navigate,useNavigate} from 'react-router-dom'

function Dashboard() {
    const navigate=useNavigate();
    const navigatePatientLogin=()=>{
        navigate('/patient_login');
    }
    const gotoPrescription=()=>{
        navigate('/add-prescription',{
            state:{patient_id:2,doctor_id:1}
        });
    }
    const gotodownloadPrescription=()=>{
        navigate('/showPrescription')
    }
    const gotodownpatientpage=()=>{
        navigate('/PatientPage')
    }
    return (
        <>
            {/* <div className="container text-center col-sm-8">
                <div id="carousel_id" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carousel_id" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel_id" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel_id" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./img.svg/images.jpeg" className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img.svg/images.jpeg" className="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel_id" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel_id" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}
            <div className="row col-sm-4 mx-auto mt-3">
                <div className="col">
                    <div className="card">
                        <img src="./img.svg/patient_img.png" style={{width:'150px', height: '150px'}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Patient</h5>
                            <button type="button" class="btn btn-success" onClick={navigatePatientLogin}>Login</button>  
                            <button type="button" class="btn btn-primary" onClick={gotodownloadPrescription}>Prescription Download</button>
                            <button type="button" class="btn btn-primary" onClick={gotodownpatientpage}>patientpages</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./img.svg/doctor_img.jpg" style={{widht:'150px', height:'150px'}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Doctor</h5>
                            <button type="button" class="btn btn-primary" onClick={navigatePatientLogin}>Login</button>
                            <button type="button" class="btn btn-primary" onClick={gotoPrescription}>Add prescription</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
            )
}

            export default Dashboard;
