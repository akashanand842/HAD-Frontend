import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';
import { useEffect,useState } from 'react';
import "../../Css_files/VideoCall.css"
import { useMemo } from 'react';

const RoomPage=()=>{

    const min = 100000;
    const max = 999999;
    const roomId = Math.floor(Math.random() * (max - min + 1)) + min;
    const roomnum = roomId.toString();
    console.log(roomnum)
    console.log(typeof(roomId))
    const jwtToken=localStorage.getItem('token');
    const patient_obj=JSON.parse(localStorage.getItem('patient'));
    const name = patient_obj['patientName'];

    const myMeeting =(element) =>{

        const appID =121940273
        const serverSecret ="c774162ad11624d4246a0aee5fb875f3";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomnum,roomnum,name);
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom(
            {
            container:element,
            scenario:{
               mode:ZegoUIKitPrebuilt.VideoConference
            },
            maxUsers: 2,
            turnOnCameraWhenJoining: false,
            turnOnMicrophoneWhenJoining: false,
        }
        )
    }
    
    useEffect(()=>{
        axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
        axios.post(`http://localhost:8081/patient/join-queue/${2}?roomId=${roomId}`,)
        .then((response)=>{
            console.log('queue success');
        })
        .catch((error)=>{
          console.error('error on adding to queue',error);
        });
        return ()=>{ console.log('return')}
    },[])
    return (
       
      <div>
        <div className='RoomCss' ref={myMeeting()}></div>
      </div>
    )
}

export default RoomPage;