import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';
import { useState,useEffect } from 'react';

const RoomPageDoctor=()=>{
    
    const [roomId,setRoomId]=useState(123);
    const [load,setLoad]=useState(false);
    useEffect(()=>{
        axios.post(`http://localhost:8081/doctor/consultation/${1}`)
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
        return <div>Loading...</div>;
    }
    console.log(typeof(roomId))
    const roomnum=roomId.toString();
    console.log(roomnum);
    const func=()=>{
        console.log('sudhanshu kumar chauhan');
    }
    const myMeeting =async (element) =>{
        const appID =2066795294
        const serverSecret ="dd1496412c994d3e0f2b99f6717683e1";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomnum,Date.now().toString(),'sudhanshu');
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom(
            {
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference
            },
        });
    }

    return (
        <div ref={myMeeting(func())}></div>
    )
}

export default RoomPageDoctor;