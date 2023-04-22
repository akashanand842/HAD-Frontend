import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav";
import "../../Css_files/DoctorPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DoctorPage = () => {

const doctor_obj = JSON.parse(localStorage.getItem("doctor"));
const name = doctor_obj["doctorName"];
const doctorId = doctor_obj["doctorId"];
const navigate = useNavigate();

  const gotoroomDoctor = () => {
    navigate("/roomDoctor");
  };
  const [queue, setQueue] = useState(0);
  const jwtToken = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
  
useEffect(()=>{
  const currsize = setInterval(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/doctor/queue-size/${doctorId}`)
    .then((Response)=>{
      console.log(Response);
      setQueue(Response.data);
    })
    .catch((error)=>{
      console.error('error on fatching size',error);
    })
  },5000)
  console.log(queue);
  return ()=>{clearInterval(currsize);}
},[queue])
  
  return (
    <>
      <div className="doctor_background">
        <SideNav />
         <h1 className="doctorName_css">{name}</h1>
         <h2 className="doctorQueue_css">You have {queue} Patient in Queue</h2>
        <div className="doctor_css">
          <button onClick={gotoroomDoctor}>Accept VC</button>
        </div>
      </div>
    </>
  );
};

export default DoctorPage;
