import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import axios from 'axios';
import { useEffect } from 'react';

const RoomPageDoctor=()=>{
    
    let roomId=123;
    useEffect(()=>{
        axios.post(`http://localhost:8081/doctor/consultation/${1}`)
        .then((response)=>{
            console.log(response.data);
            
        })
        .catch((error)=>{
            console.log('error while pop patient from queue',error);
        })
    },[])
    const func=()=>{
        console.log('sudhanshu kumar chauhan');
    }
    const myMeeting =async (element) =>{
        const appID =2066795294
        const serverSecret ="dd1496412c994d3e0f2b99f6717683e1";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),'sudhanshu');
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