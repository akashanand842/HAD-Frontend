import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './../../Css_files/SignUp.css'
import NavHead from "../../components/Nav";

const SignUp = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    patientName:"",
    age:undefined,
    gender:"",
    phoneNumber:"",
    medicalHistory:""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
   const submitUser=()=>{
     axios.post(`${process.env.REACT_APP_BACKEND_URL}/authenticate/add`,user)
     .then((response)=>{
        console.log(response);
        navigate('/login');
     })
     .catch((error)=>{
        console.error('error on submitting',error);
        alert('Invalid Infomation');
     })
   }

  return (
    <>
    <NavHead/>
    <div className="signUp">
    <div className="register">
      {/* {console.log("user", user)} */}
      <h2 className="text_css">Sign Up</h2>
      <input type="text" name="patientName"
        value={user.patientName}
        placeholder="Patient Name"
        onChange={handleChange}
      ></input>
      <input type="number" name="age"
        placeholder="Age"
        onChange={handleChange}
      ></input>
      <select type="string" placeholder="gender" name="gender" onClick={handleChange}>
        <option value="Male" >Male</option>
        <option value="Female">Female</option>
      </select>
      <input
        type="string"
        name="phoneNumber"
        value={user.phoneNumber}
        placeholder="Phone Number"
        onChange={handleChange}
      ></input>
      <input
        type="string"
        name="medicalHistory"
        value={user.medicalHistory}
        placeholder="Medical History if any"
        onChange={handleChange}
      ></input>
      <button type="submit" className="button-css" onClick={submitUser}> Submit </button>
    </div>
    </div>
    </>
  );
};

export default SignUp;