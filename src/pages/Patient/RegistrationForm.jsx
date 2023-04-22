import React, { useState } from "react";
import PatientSideNav from "../../components/PatientSideNav";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './../../Css_files/RegistrationForm.css'

const RegistrationForm = () => {
    const patient_obj = JSON.parse(localStorage.getItem("patient"));
    const patientId = patient_obj['patientId'];
    const navigate = useNavigate();
    const [data, setData] = useState({
        date: new Date(),
        symptoms: "",
        specialization : "Physician",
        description: ""
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
        console.log(data);
      };

    const saveAppointment = async (e) => {
        if(data.symptoms==="") 
        {
            alert('Fill Symptoms field.'); 
            return ;
        }
        e.preventDefault();
        console.log(data);
        const jwtToken=localStorage.getItem('token');
        axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/patient/appointment/${patientId}`,data)
            .then((response) => {
                console.log(response)
                localStorage.setItem('specialization',data.specialization);
                navigate('/roomPatient')
            })
            .catch((err) => {
                console.log(err);
            });       
        
    }

   const gotoHomePage=()=>{
        navigate('/PatientDashboard',{
          state:{patient_id:patientId}
       })
  }

  return (
    <>
      <PatientSideNav />
      
      <div className="background-img">
      <div className="box-css">
        <h2 className="text_css">Take Appointment</h2>
        <label className="label_css">Symptoms</label>
            <input type="text" name="symptoms"
              placeholder="symptoms" onChange={handleChange} />
            <label className="label_css">Specialization</label>
            <select name="specialization" onChange={handleChange}>
              <option>Physician</option>
              <option>Cardiologist</option>
              <option>Dermatologist</option>
              <option>Neurologists</option>
              <option>Ophthalmologists</option>
              <option>Orthopedist</option>
            </select>
            <label className="label_css">Description</label>
            <textarea rows="3" name="description" onChange={handleChange}/>
      <div className="two-button">
       <button type="submit" className="button-cs" onClick={(e) => saveAppointment(e)}> Video Call </button>
       <button type="submit" className="button-cs" onClick={gotoHomePage}> Return </button>
      </div>
      </div>
      </div>
    </>
  );
};

export default RegistrationForm;