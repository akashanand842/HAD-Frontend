import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';
import { useState,useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import SideNav from '../../components/SideNav';
import "../../Css_files/DoctorRoom.css";
import { useNavigate } from 'react-router-dom';

const RoomPageDoctor=()=>{
    
    const [roomId,setRoomId]=useState(123);
    const [load,setLoad]=useState(false);
    const navigate =useNavigate();

    const doctor_obj = JSON.parse(localStorage.getItem('doctor'));
    const doctorId = doctor_obj['doctorId'];
    const jwtToken = localStorage.getItem('token');
    const doctorName = doctor_obj['doctorName'];

    useEffect(()=>{
        axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
        axios.post(`http://localhost:8081/doctor/consultation/${doctorId}`)
        .then((response)=>{
            setRoomId(response.data);  
            setLoad(true); 
        })
        .catch((error)=>{
            console.log('error while pop patient from queue',error);
        })
    },[])
    if(!load)
    {
        <LinearProgress />
        return <div>Loading...</div>;
        
    }
    console.log(typeof(roomId))
    const roomnum=roomId.toString();
    console.log(roomnum);
    const myMeeting = (element) =>{
        
        const appID =121940273
        const serverSecret ="c774162ad11624d4246a0aee5fb875f3";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomnum,'123456', doctorName);
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom(
            {
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference
            },
            maxUsers: 2,
            turnOnCameraWhenJoining:false,
            turnOnMicrophoneWhenJoining:false,
            showLeavingView: false,
            onLeaveRoom: (()=>{
                navigate('/add-prescription',{
                    state:{patient_id:2,doctor_id:doctorId}
                });
            })
        });
    }

    return (
        <>
        <SideNav/>
        <div className='D_room'>
        <div ref={myMeeting}></div>
        </div>
        </>
    )
}

export default RoomPageDoctor;