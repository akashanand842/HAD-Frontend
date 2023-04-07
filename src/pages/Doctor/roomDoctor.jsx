import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';
import { useState,useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const RoomPageDoctor=()=>{
    
    const [roomId,setRoomId]=useState(123);
    const [load,setLoad]=useState(false);

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
    const myMeeting =async (element) =>{
        
        const appID =2066795294
        const serverSecret ="dd1496412c994d3e0f2b99f6717683e1";
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
        });
    }

    return (
        // <button onClick={myMeeting()}> click me</button>
        <div ref={myMeeting()}></div>
    )
}

export default RoomPageDoctor;