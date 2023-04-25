import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav";
import "../../Css_files/DoctorPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DoctorPage = () => {
const navigate = useNavigate();
const doctor_obj = JSON.parse(localStorage.getItem("doctor"));

useEffect(()=>{
  if(doctor_obj===null)
  {
    navigate('/login');
    console.log('1234')
  }
})

let name;
let doctorId;

if(!doctor_obj===null)
{
 name = doctor_obj["doctorName"];
 doctorId = doctor_obj["doctorId"];
}

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
  
 const gotologin=()=>{
    navigate('/login');
 } 

  return (
    <>
      {doctor_obj===null?<>{gotologin}</>:
      <div className="doctor_background">
        <SideNav />
         <h1 className="doctorName_css">{name}</h1>
         <h2 className="doctorQueue_css">You have {queue} Patient in Queue</h2>
        <div className="doctor_css">
          <button onClick={gotoroomDoctor}>Accept VC</button>
        </div>
      </div>
     }
    </>
  );
};

export default DoctorPage;
