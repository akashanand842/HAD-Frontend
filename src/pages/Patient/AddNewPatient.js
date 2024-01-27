import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './../../Css_files/SignUp.css'
import NavHead from "../../components/Nav";

const AddNewPatient = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const patient_num = localStorage.getItem('patient_num');
  const jwtToken = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
  const [user, setUser] = useState({
    patientName:"",
    age:undefined,
    gender:"Male",
    phoneNumber:patient_num,
    medicalHistory:""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };
   const submitUser=()=>{

    if(user.patientName==="") 
    {
        alert('Enter Patient Name')
        return ;
     }

    if(user.age===undefined) {alert('Enter Valid Age'); return ;} 

     axios.post(`${process.env.REACT_APP_BACKEND_URL}/patient/add-patient`,user)
     .then((response)=>{
        console.log(response);
        navigate('/PatientPage',{
            state:{patientNum:patient_num}
            })
     })
     .catch((error)=>{
        console.error('error on submitting',error);
        alert('Invalid Infomation');
     })
   }

   const gotoPatientPage=()=>{
     navigate('/PatientPage',{
        state:{patientNum:patient_num}
        })
   }

  return (
    <>
    <NavHead/>
    <div className="signUp">
    <div className="register">
      {console.log("user", user)}
      <h2 className="text_css">Add patient</h2>
      <input type="text" name="patientName" value={user.patientName}
        placeholder="Patient Name"
        onChange={handleChange}
      ></input>
      <input type="number" name="age"
        placeholder="Age"
        onChange={handleChange}
      ></input>
      <select name="gender" onChange={handleChange}>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input
        type="string"
        name="phoneNumber"
        value={user.phoneNumber}
        placeholder="Phone Number"
        disabled
      ></input>
      <input
        type="string"
        name="medicalHistory"
        value={user.medicalHistory}
        placeholder="Medical History if any"
        onChange={handleChange}
      ></input>
      <div className="two-button">
      <button type="submit" className="button-css" onClick={submitUser}> Submit </button>
      <button type="submit" className="button-css" onClick={gotoPatientPage}> Return </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default AddNewPatient;